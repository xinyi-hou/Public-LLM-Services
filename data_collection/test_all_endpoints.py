import os
import requests
import pandas as pd
import math

# 配置
framework_excel_path = '/\data\onew'  # 存放各 framework IP/port 的 Excel 文件夹
main_table_path = 'all_endpoint.xlsx'  # 表a路径
confidence_level_z = 1.96
error_margin = 0.05
p = 0.5
output_file = 'test_results.txt'  # 存放测试结果的文件

# 样本量计算函数
def calculate_sample_size(population_size):
    numerator = (confidence_level_z ** 2) * p * (1 - p)
    denominator = error_margin ** 2
    n_0 = numerator / denominator
    n = n_0 / (1 + (n_0 - 1) / population_size)
    return math.ceil(n)

# 加载主表
main_df = pd.read_excel(main_table_path)

# 获取所有不同的framework，顺序保留
frameworks = main_df['Framework'].drop_duplicates().tolist()

# 请求的默认 header
headers = {
    "Content-Type": "application/json"
}

# 打开文件进行写入
with open(output_file, 'w', encoding='utf-8') as result_file:

    # 遍历每个 framework
    for framework in frameworks:
        print(f"\n--- Processing framework: {framework} ---")  # 控制台输出当前框架
        result_file.write(f"\n--- Processing framework: {framework} ---\n")

        # 过滤出当前 framework 的所有行
        subset = main_df[main_df['Framework'] == framework].reset_index(drop=True)

        # 加载对应 framework 的 Excel（假设文件名为 framework.xlsx）
        excel_file = os.path.join(framework_excel_path, f"{framework}.xlsx")
        if not os.path.exists(excel_file):
            print(f"⚠️ Excel file not found for framework: {framework}")
            result_file.write(f"⚠️  Excel file not found for framework: {framework}\n")
            continue

        ip_df = pd.read_excel(excel_file)

        if 'IP地址' not in ip_df.columns or '端口' not in ip_df.columns:
            print(f"⚠️ Missing IP or Port columns in {excel_file}")
            result_file.write(f"⚠️  Missing IP or Port columns in {excel_file}\n")
            continue

        # 计算需要的样本数
        num_total_ips = len(ip_df)
        sample_size = calculate_sample_size(num_total_ips)
        print(f"Total IPs: {num_total_ips}, Sample size: {sample_size}")
        result_file.write(f"Total IPs: {num_total_ips}, Sample size: {sample_size}\n")

        # 从 IP 列表中随机抽样
        sampled_ips = ip_df.sample(n=sample_size, random_state=42)

        # 遍历每个抽样的 IP 和 Port
        for _, ip_row in sampled_ips.iterrows():
            ip = ip_row['IP地址']
            port = ip_row['端口']
            print(f"\nTesting IP: {ip}, Port: {port}...")  # 控制台输出当前测试的 IP 和 Port
            result_file.write(f"\nTesting IP: {ip}, Port: {port}...\n")

            # 遍历当前 framework 下的所有端点
            for idx, row in subset.iterrows():
                method = row['Method'].upper()
                endpoint = row['Endpoint'].lstrip('/')  # 去掉可能的斜杠
                endpoint_params = row['Endpoint 参数']  # 例如 -d 参数或查询参数
                url = f"http://{ip}:{port}/{endpoint}"

                # 如果参数为空（NaN），则不加入到 URL 中
                if pd.isna(endpoint_params):
                    endpoint_params = None

                # 控制台输出当前端点
                #print(f"→ Testing {method} {url} with params: {endpoint_params}")

                # 处理 GET 请求
                if method == 'GET':
                    if endpoint_params:
                        url += f"?{endpoint_params}"  # 将 endpoint 参数作为查询参数加到 URL
                    print(f"→ GET {url}")  # 控制台输出 GET 请求
                    result_file.write(f"→ GET {url}\n")
                    try:
                        resp = requests.get(url, headers=headers, timeout=5)
                        if resp.status_code == 200:
                            print(f"✅ Response {resp.status_code} for {url}")
                            result_file.write(f"✅ Response {resp.status_code} for {url}\n")
                        else:
                            print(f"❌ Response {resp.status_code} for {url}")
                            result_file.write(f"❌ Response {resp.status_code} for {url}\n")
                    except requests.exceptions.RequestException as e:
                        print(f"❌ Request failed: {e} for {url}")
                        result_file.write(f"❌ Request failed: {e} for {url}\n")

                # 处理 POST 请求
                elif method == 'POST':
                    data = {}
                    if endpoint_params:
                        # 假设参数是 JSON 格式或类似的结构
                        try:
                            data = eval(endpoint_params)  # 将字符串参数转换为字典（假设是字典格式）
                        except Exception as e:
                            print(f"❌ Error parsing POST data for {url}: {e}")
                            result_file.write(f"❌ Error parsing POST data for {url}: {e}\n")
                            continue
                    print(f"→ POST {url} with data: {data}")  # 控制台输出 POST 请求
                    result_file.write(f"→ POST {url} with data: {data}\n")
                    try:
                        resp = requests.post(url, json=data, headers=headers, timeout=5)
                        if resp.status_code == 200:
                            print(f"✅ Response {resp.status_code} for {url}")
                            result_file.write(f"✅ Response {resp.status_code} for {url}\n")
                        else:
                            print(f"❌ Response {resp.status_code} for {url}")
                            result_file.write(f"❌ Response {resp.status_code} for {url}\n")
                    except requests.exceptions.RequestException as e:
                        print(f"❌ Request failed: {e} for {url}")
                        result_file.write(f"❌ Request failed: {e} for {url}\n")

                else:
                    print(f"❌ Unsupported method: {method} for {url}")  # 控制台输出不支持的方法
                    result_file.write(f"❌ Unsupported method: {method} for {url}\n")

        print(f"--- Finished processing framework: {framework} ---")  # 控制台输出框架处理完成
