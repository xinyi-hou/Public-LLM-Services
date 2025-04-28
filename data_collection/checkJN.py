import pandas as pd
import requests
from math import ceil

# 配置项
excel_file = r'/\data\Jupyter Notebook.xlsx'
ip_field = 'IP地址'
port_field = '端口'
output_file = './test_output/Jupyter Notebook.txt'
login_keywords = ['login', 'sign in', '登录', 'token', 'password']

# 抽样计算函数
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

# 计算抽样数
sample_size = calculate_sample_size(total_records)
print(f"🎯 抽样目标：{sample_size} 条（95% 置信度 ±5% 区间）")

# 随机抽样
sampled_df = df.sample(n=sample_size, random_state=42)

# 执行访问与认证检查
with open(output_file, 'w', encoding='utf-8') as f_out:
    idx = 0
    for i, row in sampled_df.iterrows():
        ip = row[ip_field]
        port = row[port_field]

        # 仅保留 port == 8888
        if str(port) != '8888':
            continue

        idx += 1  # 累计有效样本序号
        url = f"http://{ip}:{port}"
        print(f"[{idx}] 检查中：{url}（原始行号：{i}）")

        try:
            response = requests.get(url, timeout=5)
            response.raise_for_status()
            data = response.text.lower()
            if any(keyword in data for keyword in login_keywords):
                status = "开启认证"
            else:
                status = "未开启认证"
            print(f"  🔍 检查结果：{status}")
        except requests.RequestException as e:
            status = f"请求失败：{e}"
            print(f"  ❌ 请求异常：{e}")

        line_prefix = f"A{idx}"
        f_out.write(f"{line_prefix} [原始行号:{i}] {url} -> {status}\n")

print(f"\n📄 检查完成，结果已写入：{output_file}")
