import math
import csv

def calculate_sample_size(N, confidence_level=0.95, margin_of_error=0.05, p=0.5):
    Z = 1.96  # 对应95%置信度
    E = margin_of_error

    numerator = (Z**2) * p * (1 - p) * N
    denominator = (E**2) * (N - 1) + (Z**2) * p * (1 - p)
    n = numerator / denominator

    return math.ceil(n)

# 总体数量列表
populations = [
    155423, 37242, 28445, 25883, 24531, 15219, 9729, 6077,
    4526, 4234, 3766, 2572, 2051, 365, 39
]

# 构造结果列表
results = [("Population Size", "Sample Size")]
for N in populations:
    n = calculate_sample_size(N)
    results.append((N, n))

# 输出到 CSV 文件
output_file = "sample_sizes.csv"
with open(output_file, mode="w", newline='', encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerows(results)

print(f"样本容量结果已写入文件：{output_file}")
