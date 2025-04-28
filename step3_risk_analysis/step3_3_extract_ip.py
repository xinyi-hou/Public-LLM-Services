import json
import csv

def extract_ollama_items(json_file, output_csv):
    # 读取JSON文件
    with open(json_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # 筛选 framework == "Ollama" 的项
    extracted = []
    for item in data:
        if item.get('framework') == 'Ollama':
            ip = item.get('ip', '')
            port = item.get('port', '')
            extracted.append([item['framework'], ip, port])

    # 保存到CSV
    with open(output_csv, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['framework', 'ip', 'port'])  # 写表头
        writer.writerows(extracted)

    print(f"[+] Extracted {len(extracted)} items to {output_csv}")

if __name__ == "__main__":
    extract_ollama_items('/Users/ashley/PycharmProjects/LLM_Deployment/step1/llm_services.json', 'ollama_services.csv')
