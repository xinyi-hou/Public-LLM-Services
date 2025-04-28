import pandas as pd
import os
import aiohttp
import asyncio
import random
import math
import json
from collections import defaultdict
from aiohttp import ClientSession


# 读取Excel文件，获取IP和端口
def read_excel_for_framework(excel_path):
    # 读取该Excel文件
    df = pd.read_excel(excel_path)
    # 假设表格中的列包括 'IP' 和 'Port'
    return df[['IP地址', '端口']].values.tolist()


# 计算抽样数
def calculate_sample_size(population_size, confidence_level=0.95, margin_of_error=0.05):
    Z = 1.96  # 95%置信度的Z值
    p = 0.5  # 假设的成功概率
    e = margin_of_error
    sample_size = (Z ** 2 * p * (1 - p)) / (e ** 2)

    # 根据总量进行调整
    sample_size = sample_size / (1 + ((sample_size - 1) / population_size))
    return math.ceil(sample_size)


# 异步发送请求函数
async def make_request(session, url, method, params=None, framework=None, ip=None, log_file=None, log_lock=None):
    headers = {'Content-Type': 'application/json'}
    try:
        if method == 'GET':
            async with session.get(url, headers=headers) as response:
                status = response.status
                if status != 200:
                    print(f"Request to {url} failed with status {status}")
        elif method == 'POST':
            async with session.post(url, json=params, headers=headers) as response:
                status = response.status
                if status != 200:
                    print(f"Request to {url} failed with status {status}")
        elif method == 'DELETE':
            async with session.delete(url, json=params, headers=headers) as response:
                status = response.status
                if status != 200:
                    print(f"Request to {url} failed with status {status}")
        elif method == 'PUT':
            async with session.put(url, json=params, headers=headers) as response:
                status = response.status
                if status != 200:
                    print(f"Request to {url} failed with status {status}")
        elif method == 'PATCH':
            async with session.patch(url, json=params, headers=headers) as response:
                status = response.status
                if status != 200:
                    print(f"Request to {url} failed with status {status}")
        else:
            status = "Unsupported method"

        # 收集结果
        result = f"Framework: {framework}, URL: {url}, Status: {status}"

        # 使用线程安全的方式写入文件
        async with log_lock:
            with open(log_file, "a") as f:
                f.write(result + "\n")
            print(f"Logged: {result.strip()}")

    except Exception as e:
        error_message = f"Error with request to {url}: {str(e)}"
        print(error_message)
        # 在日志中记录错误
        result = f"Framework: {framework}, URL: {url}, Status: Error, Message: {str(e)}"
        async with log_lock:
            with open(log_file, "a") as f:
                f.write(result + "\n")
            print(f"Logged Error: {result.strip()}")

async def make_request_1(session, url, method, params=None, framework=None, ip=None, log_file=None, log_lock=None):
    headers = {'Content-Type': 'application/json'}
    try:
        if method == 'GET':
            async with session.get(url, headers=headers) as response:
                status = response.status
                if status != 200:
                    print(f"Request to {url} failed with status {status}")
        elif method == 'POST':
            async with session.post(url, headers=headers) as response:
                status = response.status
                if status != 200:
                    print(f"Request to {url} failed with status {status}")
        elif method == 'DELETE':
            async with session.delete(url, headers=headers) as response:
                status = response.status
                if status != 200:
                    print(f"Request to {url} failed with status {status}")
        elif method == 'PUT':
            async with session.put(url, headers=headers) as response:
                status = response.status
                if status != 200:
                    print(f"Request to {url} failed with status {status}")
        elif method == 'PATCH':
            async with session.patch(url,  headers=headers) as response:
                status = response.status
                if status != 200:
                    print(f"Request to {url} failed with status {status}")
        else:
            status = "Unsupported method"

        # 收集结果
        result = f"Framework: {framework}, URL: {url}, Status: {status}"

        # 使用线程安全的方式写入文件
        async with log_lock:
            with open(log_file, "a") as f:
                f.write(result + "\n")
            print(f"Logged: {result.strip()}")

    except Exception as e:
        error_message = f"Error with request to {url}: {str(e)}"
        print(error_message)
        # 在日志中记录错误
        result = f"Framework: {framework}, URL: {url}, Status: Error, Message: {str(e)}"
        async with log_lock:
            with open(log_file, "a") as f:
                f.write(result + "\n")
            print(f"Logged Error: {result.strip()}")

# 异步主处理函数
async def process_frameworks(excel_folder_path, table_a, log_file):
    # 获取所有唯一的 framework 值
    frameworks = table_a['Framework'].unique()

    # 创建 aiohttp 会话
    async with aiohttp.ClientSession() as session:
        # 创建线程锁来确保线程安全
        log_lock = asyncio.Lock()

        # 遍历每个 framework
        for framework in frameworks:
            print(f"Processing framework: {framework}")

            # 构造对应的 Excel 文件路径
            excel_path = os.path.join(excel_folder_path, f"{framework}.xlsx")

            # 确保文件存在
            if os.path.exists(excel_path):
                # 获取对应的IP和Port列表
                ip_port_list = read_excel_for_framework(excel_path)

                # 计算样本数
                sample_size = calculate_sample_size(len(ip_port_list))
                print(f"Sample size for {framework}: {sample_size}")

                # 随机抽样
                sampled_ips = random.sample(ip_port_list, min(sample_size, len(ip_port_list)))

                # 对每个抽样的IP和Port，测试表A中的所有Endpoint
                tasks = []  # 存储所有的请求任务
                for ip, port in sampled_ips:
                    print(f"Testing with IP: {ip} and Port: {port}")

                    # 对每个 endpoint 分别进行测试
                    for _, row in table_a[table_a['Framework'] == framework].iterrows():
                        endpoint = row['Endpoint']
                        method = row['Method']
                        params = None

                        # 处理 POST 和 DELETE 方法，解析 EndPoint参数 字段为 JSON
                        if method in ['POST', 'DELETE']:
                            try:
                                # 确保 EndPoint参数 是字符串，并且是有效的 JSON
                                if isinstance(row['EndPoint参数'], str):
                                    params = json.loads(row['EndPoint参数'])
                                else:
                                    print(
                                        f"Warning: EndPoint参数 is not a string for endpoint {endpoint}: {row['EndPoint参数']}")
                                    continue
                            except json.JSONDecodeError:
                                print(f"Error decoding JSON for endpoint {endpoint}: {row['EndPoint参数']}")
                                continue
                            except TypeError:
                                print(
                                    f"Error: Invalid data type for EndPoint参数 in endpoint {endpoint}: {row['EndPoint参数']}")
                                continue

                        # 构建请求 URL
                        url = f"http://{ip}:{port}{endpoint}"
                        print(f"Testing endpoint: {url} with {method} method")

                        # 创建请求任务
                        if endpoint == "nan":
                            tasks.append(make_request_1(session, url, method, params, framework, ip, log_file, log_lock))
                        else:
                            tasks.append(make_request(session, url, method, params, framework, ip, log_file, log_lock))

                # 等待所有请求完成
                await asyncio.gather(*tasks)
            else:
                print(f"Excel file for framework {framework} not found at {excel_path}")


# 加载表A（假设表A是一个Excel文件）
def load_table_a(table_a_path):
    return pd.read_excel(table_a_path)


# 设置路径
excel_folder_path = "/\data\onew"  # 存储excel文件的文件夹路径
table_a_path = "nall_endpoint.xlsx"  # 存储表A的文件路径
log_file_path = "results.txt"  # 测试结果日志文件路径

# 读取表A
table_a = load_table_a(table_a_path)

# 启动异步任务
asyncio.run(process_frameworks(excel_folder_path, table_a, log_file_path))
