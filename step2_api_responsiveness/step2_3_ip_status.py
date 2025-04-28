import re
import csv
from collections import defaultdict

# 输入输出文件路径
input_file = "results_1.txt"
output_file = "parsed_output_ip_status.csv"

# 用于计数的字典：键为 (framework, IP, status)，值为出现次数
counter = defaultdict(int)

# 正则表达式提取字段: Framework, IP+Port, Status
pattern = re.compile(
    r"Framework:\s*(.*?),\s*URL:\s*(http://[\d\.]+:\d+)[^,]*,\s*Status:\s*(\d+)"
)

# 读取并解析每一行
with open(input_file, "r", encoding="utf-8", errors="ignore") as f:
    for line in f:
        match = pattern.search(line)
        if match:
            framework = match.group(1).strip()
            ip_with_port = match.group(2).strip()
            status = match.group(3).strip()
            key = (framework, ip_with_port, status)
            counter[key] += 1

# 写入 CSV 文件
with open(output_file, "w", newline='', encoding="utf-8") as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(["framework", "ip", "status", "count"])
    for (framework, ip, status), count in counter.items():
        writer.writerow([framework, ip, status, count])

print(f"✅ 提取完成，所有状态码已记录，结果保存到 {output_file}")