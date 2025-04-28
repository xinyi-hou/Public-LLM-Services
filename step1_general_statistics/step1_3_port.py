import json
import csv
from collections import Counter

# ✅ 只保留以下端口的数据（你提供的列表）
allowed_ports = {
    "443", "11434", "80", "8080", "3000",
    "8888", "8000", "8089", "9999", "8085"
}

# 读取 JSON 文件
with open("llm_services.json", "r", encoding="utf-8") as f:
    data = json.load(f)

# 提取 (port, tls.version) 并过滤
pairs = []
for item in data:
    port = str(item.get("port", "nan")).strip()
    tls_version = str(item.get("tls.version", "nan")).strip()
    if port in allowed_ports:
        pairs.append((port, tls_version))

# 统计每种组合出现次数
counter = Counter(pairs)

# 写入 CSV 文件
with open("step1_3_port/port_tls_version_stats.csv", "w", newline='', encoding="utf-8") as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(["port", "tls.version", "count"])  # 表头
    for (port, tls_version), count in counter.items():
        writer.writerow([port, tls_version, count])

print("✅ 已完成：port_tls_version_stats.csv")