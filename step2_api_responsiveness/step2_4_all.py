import csv
import re

def parse_log_to_csv(input_txt, output_csv):
    # 用正则提取需要的信息
    pattern = re.compile(r"Framework:\s*(.*?),\s*URL:\s*(.*?),\s*Status:\s*(\w+)")

    with open(input_txt, 'r', encoding="utf-8", errors="ignore") as f:
        lines = f.readlines()

    extracted_data = []
    for line in lines:
        match = pattern.search(line)
        if match:
            framework, url, status = match.groups()
            extracted_data.append([framework.strip(), url.strip(), status.strip()])

    # 写入CSV
    with open(output_csv, 'w', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['framework', 'url', 'status'])  # 写表头
        writer.writerows(extracted_data)

if __name__ == "__main__":
    parse_log_to_csv('results_0.txt', 'step2_4_all/results_all.csv')
