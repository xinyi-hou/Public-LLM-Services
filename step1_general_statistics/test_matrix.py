import json
import pandas as pd

# 指定感兴趣的 domain
target_domains = {
    "nan", "nellasushi.es", "mysuccess.be", "ilgermoglioshop.it",
    "human-rights-law.eu", "zdrowysobiecin.pl", "hf.space",
    "tom-paintor.fr", "dj-omega.pl", "psy-meganedubosclard.fr", "feestvoorjou.nl"
}

# 读取 JSON 数据
with open("llm_services.json", 'r', encoding='utf-8') as f:
    data = json.load(f)

# 提取 domain 与 framework
records = []
for item in data:
    domain = str(item.get("domain", "")).strip()
    framework = item.get("framework", "").strip()
    if domain in target_domains and framework:
        records.append((domain, framework))

# 转为 DataFrame
df = pd.DataFrame(records, columns=["domain", "framework"])

# 构建透视表：行是 domain，列是 framework，值是数量
pivot_table = df.pivot_table(index="domain", columns="framework", aggfunc='size', fill_value=0)

# 导出为 CSV
pivot_table.to_csv("step1_2_domain/domain_framework_matrix.csv")

print("✅ 已导出：domain_framework_matrix.csv")