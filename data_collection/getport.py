import requests
import base64
from collections import Counter


def get_all_ollama_ports(email, api_key):
    # 构造查询
    query = ('country="US" && app="Ollama" && os!=""')
    encoded_query = base64.b64encode(query.encode()).decode()

    # API参数
    url = "https://fofoapi.com/api/v1/search/all"
    params = {
        "email": email,
        "key": api_key,
        "qbase64": encoded_query,
        "size": 10000,  # 获取最大允许数量
        "fields": "ip,os"
    }


    # 发送请求
    try:
        response = requests.get(url, params=params, timeout=60)
        data = response.json()

        # 统计所有端口
        port_counter = Counter()
        for item in data['results']:
            port_counter[item[1]] += 1  # item[1]是端口字段

        return port_counter.most_common()  # 按出现频率排序返回

    except Exception as e:
        print(f"API请求失败: {str(e)}")
        return None


# 使用示例
all_count=0
ports = get_all_ollama_ports("your_email@example.com", "pvsj0cv8407s6k5ogf44fwlscjqdr3zf")
for port, count in ports:
    all_count += count
    print(f"端口 {port}: {count} 个实例")
print(f"共{all_count}条记录")