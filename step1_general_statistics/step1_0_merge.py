import os
import pandas as pd

# ✅ 修改为你的目标文件夹路径
FOLDER_PATH = 'fofa'  # 例如：'F:/MyProject/data'

# ✅ 输出文件名
OUTPUT_FILE = 'merged.xlsx'

# 创建一个空的 DataFrame 列表
all_dataframes = []

# 遍历文件夹中的所有文件
for filename in os.listdir(FOLDER_PATH):
    if filename.endswith('.xlsx') and not filename.startswith('~$'):  # 跳过临时文件
        filepath = os.path.join(FOLDER_PATH, filename)
        try:
            # 读取 Excel 文件的第一个工作表
            df = pd.read_excel(filepath)
            
            # 添加来源文件名列
            df['source_file'] = filename
            
            # 添加 framework 列（去除扩展名）
            framework_name = os.path.splitext(filename)[0]
            df['framework'] = framework_name
            
            all_dataframes.append(df)
            print(f"✅ Loaded: {filename}")
        except Exception as e:
            print(f"❌ Failed to read {filename}: {e}")

# 合并所有 DataFrame
if all_dataframes:
    merged_df = pd.concat(all_dataframes, ignore_index=True)
    merged_df.to_excel(OUTPUT_FILE, index=False)
    print(f"\n🎉 合并完成，输出文件：{OUTPUT_FILE}")
else:
    print("⚠️ 没有找到可用的 .xlsx 文件。")