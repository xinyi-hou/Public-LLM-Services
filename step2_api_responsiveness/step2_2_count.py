import re
import csv
from collections import defaultdict

# 输入输出文件路径
input_file = "results_1.txt"
output_file = "parsed_output.csv"

# 用于计数的字典
counter = defaultdict(int)

# 正则表达式提取所需字段
pattern = re.compile(
    r"Framework:\s*(.*?),\s*URL:\s*http://.*?:\d+(/[^, ]+),\s*Status:\s*(\d+|Error)"
)

# 读取并解析每一行
with open(input_file, "r", encoding="utf-8", errors="ignore") as f:
    for line in f:
        match = pattern.search(line)
        if match:
            framework = match.group(1).strip()
            api_endpoint = match.group(2).strip()
            status = match.group(3).strip()
            key = (framework, api_endpoint, status)
            counter[key] += 1

# 写入 CSV 文件
with open(output_file, "w", newline='', encoding="utf-8") as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(["framework", "api_endpoint", "status", "count"])
    for (framework, api_endpoint, status), count in counter.items():
        writer.writerow([framework, api_endpoint, status, count])

print(f"✅ 解析完成，结果已保存到 {output_file}")