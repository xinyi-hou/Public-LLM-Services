import os

# 定义输入和输出文件夹
input_folder = 'test'
output_folder = 'clean'

# 创建输出文件夹（如果不存在）
os.makedirs(output_folder, exist_ok=True)

# 遍历所有 txt 文件
for filename in os.listdir(input_folder):
    if filename.endswith('.txt'):
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, filename)

        with open(input_path, 'r', encoding='utf-8') as infile, \
             open(output_path, 'w', encoding='utf-8') as outfile:

            for line in infile:
                if '-> Error' not in line:
                    outfile.write(line)

print("清理完成，结果已输出至 'clean/' 文件夹。")
