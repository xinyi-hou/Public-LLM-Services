import pandas as pd
import json
from collections import Counter
import os

# ======= 配置文件路径 =======
json_file = 'llm_assets.json'
output_dir = 'step1_3_field'

# ======= 创建输出目录 =======
os.makedirs(output_dir, exist_ok=True)

# ======= 加载 JSON 数据 =======
with open(json_file, 'r', encoding='utf-8') as f:
    try:
        data = json.load(f)  # 标准 JSON 数组格式
    except:
        # 如果是 JSON Lines 格式
        data = [json.loads(line) for line in f if line.strip()]

print(f"✅ 已加载 {len(data)} 条数据")

# 转换为 DataFrame
df = pd.DataFrame(data)

# ======= 遍历每个字段进行值频次统计 =======
for column in df.columns:
    value_counts = df[column].value_counts(dropna=False)  # 包含 NaN
    result_df = value_counts.reset_index()
    result_df.columns = [column, 'count']
    
    # 保存为 CSV
    csv_output_path = os.path.join(output_dir, f"{column}_stats.csv")
    result_df.to_csv(csv_output_path, index=False)
    print(f"📄 已输出统计：{csv_output_path}")

print("\n🎉 所有字段统计完毕，结果保存在文件夹：", output_dir)