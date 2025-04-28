import json
import pandas as pd

# === 你的 JSON 文件路径 ===
json_path = "llm_services.json"

# 读取 JSON 文件
with open(json_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

# 提取 os 和 server 字段，跳过缺失值
records = []
for entry in data:
    os_val = entry.get("os")
    server_val = entry.get("server")
    
    # 去除为空或 nan 的记录
    if os_val and os_val.lower() != "nan" and server_val and server_val.lower() != "nan":
        records.append((os_val.strip().lower(), server_val.strip().lower()))

# 构建 DataFrame
df = pd.DataFrame(records, columns=["os", "server"])

# 分组统计组合频次
df_grouped = df.groupby(["os", "server"]).size().reset_index(name="count")

# 按 count 降序排列
df_sorted = df_grouped.sort_values(by="count", ascending=False)

# 保存 CSV
output_path = "os_server_distribution_clean.csv"
df_sorted.to_csv(output_path, index=False)

print(f"✅ 导出成功，保存为：{output_path}")
