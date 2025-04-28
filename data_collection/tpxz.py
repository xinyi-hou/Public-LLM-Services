import requests
import pandas as pd
from datetime import datetime, timedelta
import time
import logging
from typing import List, Dict

# 配置日志
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


class FofaClient:
    def __init__(self, email: str, api_key: str):
        self.email = email
        self.api_key = api_key
        self.base_url = "https://fofoapi.com/api/v1/search/all"
        self.session = requests.Session()
        self.session.headers.update({'User-Agent': 'Mozilla/5.0'})

    def query_fofa(self, query: str, page: int = 1, size: int = 10000, fields: str = None) -> List[Dict]:
        """执行FOFA查询"""
        params = {
            'email': self.email,
            'key': self.api_key,
            'qbase64': self._encode_query(query),
            'page': page,
            'size': size,
            'fields': fields or self._get_default_fields(),
            'full': 'true'  # 获取完整数据
        }

        try:
            resp = self.session.get(self.base_url, params=params, timeout=30)
            resp.raise_for_status()
            data = resp.json()

            if data['error']:
                raise ValueError(f"FOFA API error: {data['errmsg']}")

            return data['results']
        except Exception as e:
            logger.error(f"查询失败: {str(e)}")
            return []

    @staticmethod
    def _encode_query(query: str) -> str:
        """编码查询语句"""
        import base64
        return base64.b64encode(query.encode('utf-8')).decode('utf-8')

    @staticmethod
    def _get_default_fields() -> str:
        """返回默认查询字段"""
        return ",".join([
            "ip", "protocol", "title", "domain", "country", "city",
            "country_name", "jarm", "tls.ja3s", "cert.cn",
            "cert.subject.org", "cert.issuer.org",
            "os", "port", "host", "server", "region",
            "link", "tls.version", "icp",
            "cert.domain", "asn"
        ])


def time_segmented_query(
        client: FofaClient,
        base_query: str,
        start_date: datetime,
        end_date: datetime,
        initial_delta: int = 30,
        max_retries: int = 3
) -> List[Dict]:
    """
    按时间分段查询FOFA数据
    :param client: FofaClient实例
    :param base_query: 基础查询语句(不包含时间条件)
    :param start_date: 开始日期
    :param end_date: 结束日期
    :param initial_delta: 初始分段天数
    :param max_retries: 最大重试次数
    :return: 合并后的结果列表
    """
    all_results = []
    current_date = start_date
    delta = timedelta(days=initial_delta)

    while current_date < end_date:
        next_date = min(current_date + delta, end_date)

        # 构建带时间条件的查询
        time_query = f'after="{current_date.strftime("%Y-%m-%d")}" && before="{next_date.strftime("%Y-%m-%d")}"'
        full_query = f'{base_query} && {time_query}'

        logger.info(f"查询时间段: {current_date} 至 {next_date} | 查询: {full_query}")

        retry_count = 0
        while retry_count < max_retries:
            try:
                results = client.query_fofa(full_query)
                all_results.extend(results)
                logger.info(f"获取到 {len(results)} 条结果，累计 {len(all_results)} 条")

                # 动态调整时间段
                if len(results) >= 9000:  # 接近限制
                    delta = delta / 2
                    logger.warning(f"结果接近限制，缩小时间段为 {delta.days} 天")
                    break
                elif len(results) < 2000 and delta.days < 365:  # 结果太少
                    delta = delta * 2
                    logger.info(f"结果较少，扩大时间段为 {delta.days} 天")

                current_date = next_date
                time.sleep(1)  # 避免频繁请求
                break

            except Exception as e:
                retry_count += 1
                logger.error(f"尝试 {retry_count}/{max_retries} 失败: {str(e)}")
                if retry_count == max_retries:
                    logger.error(f"放弃查询时间段 {current_date} 至 {next_date}")
                    current_date = next_date  # 跳过这个时间段
                time.sleep(5)

    return all_results


def save_to_excel(data: List[Dict], filename: str):
    """保存数据到Excel文件"""
    if not data:
        logger.warning("没有数据可保存")
        return

    # 创建DataFrame
    df = pd.DataFrame(data)

    # 处理可能的多值字段
    for col in df.columns:
        if df[col].apply(lambda x: isinstance(x, list)).any():
            df[col] = df[col].apply(lambda x: ', '.join(map(str, x)) if isinstance(x, list) else x)

    # 保存Excel
    try:
        df.to_excel(filename, index=False, engine='openpyxl')
        logger.info(f"成功保存 {len(data)} 条数据到 {filename}")
    except Exception as e:
        logger.error(f"保存文件失败: {str(e)}")


if __name__ == "__main__":
    # 配置你的FOFA账户
    FOFA_EMAIL = "123456789@qq.com"  # 替换为你的FOFA邮箱
    FOFA_KEY = "pvsj0cv8407s6k5ogf44fwlscjqdr3zf"  # 替换为你的FOFA API KEY

    # 创建客户端
    client = FofaClient(FOFA_EMAIL, FOFA_KEY)

    # 设置查询参数
    BASE_QUERY = 'app="Ollama"'  # 替换为你的查询语句
    START_DATE = datetime(2023, 1, 1)  # 开始日期
    END_DATE = datetime(2025, 4, 21)  # 结束日期
    OUTPUT_FILE = "fofa_results.xlsx"  # 输出文件名

    # 执行分段查询
    logger.info("开始FOFA分段查询...")
    results = time_segmented_query(
        client=client,
        base_query=BASE_QUERY,
        start_date=START_DATE,
        end_date=END_DATE,
        initial_delta=30  # 初始分段为30天
    )

    # 保存结果
    save_to_excel(results, OUTPUT_FILE)
    logger.info("查询完成!")