import pandas as pd

# 输入与输出路径
input_path = "step1_5_os/os_server_distribution_clean.csv"
output_path = "step1_5_os/os_server.csv"

# 读取数据
df = pd.read_csv(input_path)

# 总数
total = df["count"].sum()

# 添加百分比列（保留两位小数）
df["percentage"] = (df["count"] / total * 100).round(2).astype(str) + "%"

# 排序
df_sorted = df.sort_values(by="count", ascending=False)

# 保存新文件
df_sorted.to_csv(output_path, index=False)

print(f"✅ CSV with percentage saved to: {output_path}")
