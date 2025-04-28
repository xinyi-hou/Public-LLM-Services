import pandas as pd
import requests
from math import ceil

# 参数配置
excel_file = r'/\data\Ollama.xlsx'  # Excel 文件路径
ip_field = 'IP地址'                     # IP 字段名
port_field = '端口'                 # 端口字段名
endpoints = ['/api/tags']  # 固定 endpoint 路径
output_file = './test_output/Ollama_output.txt'          # 输出文件路径
headers = {"Content-Type": "application/json"}
  # 请求头

# 抽样计算函数（95% 置信度 ±5%）
def calculate_sample_size(population_size, confidence_z=1.96, margin_error=0.05):
    p = 0.5
    n0 = (confidence_z**2 * p * (1 - p)) / (margin_error**2)
    n = n0 / (1 + ((n0 - 1) / population_size))
    return ceil(n)

# 读取 Excel 数据
print("📄 正在读取 Excel 文件...")
df = pd.read_excel(excel_file)

# 获取总记录数
total_records = len(df)
print(f"✅ 读取完成，总记录数：{total_records}")

# 计算应抽样数量
sample_size = calculate_sample_size(total_records)
print(f"🎯 抽样目标：{sample_size} 条（95% 置信度 ±5% 区间）")

# 随机抽样
sampled_df = df.sample(n=sample_size, random_state=42)

# 执行请求并写入结果
with open(output_file, 'w', encoding='utf-8') as f_out:
    for idx, (i, row) in enumerate(sampled_df.iterrows(), start=1):
        ip = row[ip_field]
        port = row[port_field]
        endpoint = endpoints[0]  # 目前只用一个固定 endpoint
        url = f"http://{ip}:{port}{endpoint}"

        print(f"[{idx}/{sample_size}] 请求中：{url}（原始数据行号：{i}）")
        try:
            response = requests.get(url, headers=headers, timeout=5)
            response.raise_for_status()
            data = response.text
            print(f"  ✅ 成功：响应长度 {len(data)} 字符")
        except requests.RequestException as e:
            data = f"Error: {e}"
            print(f"  ❌ 请求失败：{e}")

        line_prefix = f"A{idx}"
        f_out.write(f"{line_prefix} [原始行号:{i}] {url} -> {data}\n")

print(f"\n🎉 所有请求完成，结果已写入：{output_file}")
