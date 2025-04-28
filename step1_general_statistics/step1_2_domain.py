import json
import os
import csv
from collections import defaultdict

# 你关注的域名
target_domains = {
    "nan", "nellasushi.es", "mysuccess.be", "ilgermoglioshop.it",
    "human-rights-law.eu", "zdrowysobiecin.pl", "hf.space",
    "tom-paintor.fr", "dj-omega.pl", "psy-meganedubosclard.fr", "feestvoorjou.nl"
}

# 加载 JSON 文件
with open("llm_services.json", "r", encoding="utf-8") as f:
    data = json.load(f)

# 用于统计 (domain, ip) 对的出现次数
domain_ip_counter = defaultdict(int)

# 遍历每条记录
for entry in data:
    domain = entry.get("domain", "nan") or "nan"
    ip = entry.get("ip", "nan") or "nan"

    if domain in target_domains:
        domain_ip_counter[(domain, ip)] += 1

# 输出文件路径
output_dir = "step1_2_domain"
output_file = os.path.join(output_dir, "domain_ip.csv")

# 确保目录存在
os.makedirs(output_dir, exist_ok=True)

# 写入 CSV 文件
with open(output_file, "w", newline="", encoding="utf-8") as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(["domain", "ip", "count"])  # 写表头
    for (domain, ip), count in sorted(domain_ip_counter.items(), key=lambda x: (-x[1], x[0][0])):
        writer.writerow([domain, ip, count])

print(f"✅ 数据已保存到：{output_file}")