import os
import json
import csv

# 配置路径
INPUT_DIR = 'step3_1_response'
OUTPUT_CSV = 'step3_2_clean/valid_json_summary.csv'

def is_invalid_json(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        # 判断是否是空对象{}或者空数组[]
        if data == {} or data == []:
            return True
        else:
            return False
    except Exception as e:
        # 如果无法解析，认为是坏文件，也删除
        print(f"[!] Error reading {file_path}: {e}")
        return True

def main():
    records = []

    # 遍历framework目录
    for framework in os.listdir(INPUT_DIR):
        framework_path = os.path.join(INPUT_DIR, framework)
        if not os.path.isdir(framework_path):
            continue

        # 遍历api endpoint目录
        for api_folder in os.listdir(framework_path):
            api_path = os.path.join(framework_path, api_folder)
            if not os.path.isdir(api_path):
                continue

            # 遍历json文件
            for filename in os.listdir(api_path):
                if filename.endswith('.json'):
                    file_path = os.path.join(api_path, filename)

                    if is_invalid_json(file_path):
                        os.remove(file_path)
                        print(f"[-] Deleted invalid JSON: {file_path}")
                    else:
                        ip_port = filename[:-5]  # 去掉 .json
                        records.append([framework, api_folder, ip_port])

    # 写CSV文件
    with open(OUTPUT_CSV, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['framework', 'api_endpoint', 'ip_port'])
        writer.writerows(records)

    print(f"[+] Finished! Valid records: {len(records)} saved to {OUTPUT_CSV}")

if __name__ == "__main__":
    main()
