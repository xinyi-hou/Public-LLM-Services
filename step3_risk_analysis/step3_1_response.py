import os
import csv
import requests
import time
import json
from urllib.parse import urlparse

# 配置
MAX_RETRIES = 3
RETRY_DELAY = 2  # 秒
PROGRESS_FILE = 'progress_done.txt'  # 成功记录
FAILED_FILE = 'failed.txt'  # 失败记录

def load_progress():
    if os.path.exists(PROGRESS_FILE):
        with open(PROGRESS_FILE, 'r') as f:
            return set(line.strip() for line in f if line.strip())
    return set()

def save_progress(url):
    with open(PROGRESS_FILE, 'a') as f:
        f.write(url + '\n')

def save_failed(url):
    with open(FAILED_FILE, 'a') as f:
        f.write(url + '\n')

def save_response_json(url, save_path):
    for attempt in range(MAX_RETRIES):
        try:
            response = requests.get(url, timeout=10)
            if response.ok and response.text.strip():
                try:
                    json_data = response.json()
                    os.makedirs(os.path.dirname(save_path), exist_ok=True)
                    with open(save_path, 'w', encoding='utf-8') as f:
                        json.dump(json_data, f, indent=2, ensure_ascii=False)
                    print(f"[+] Saved: {save_path}")
                    return True
                except ValueError:
                    print(f"[-] Response at {url} is not valid JSON.")
                    # 注意：直接记录到failed.txt
                    save_failed(url)
                    return False
            else:
                print(f"[-] No content at {url}")
                return False
        except Exception as e:
            print(f"[!] Attempt {attempt + 1} failed for {url}: {e}")
            if attempt < MAX_RETRIES - 1:
                time.sleep(RETRY_DELAY)
    # 如果到这里都失败了，也可以记录到failed.txt（可选）
    save_failed(url)
    return False

def main():
    input_csv = 'results_all.csv'
    output_base_dir = 'step3_1_response'

    done_urls = load_progress()

    with open(input_csv, 'r') as f:
        reader = csv.DictReader(f)
        for row in reader:
            framework = row['framework'].strip()
            url = row['url'].strip()
            status = row['status'].strip()

            if status != '200':
                continue

            if url in done_urls:
                print(f"[=] Already done, skipping: {url}")
                continue

            parsed_url = urlparse(url)
            api_endpoint = parsed_url.path.strip('/').replace('/', '_')
            ip_port = f"{parsed_url.hostname}:{parsed_url.port}"

            save_dir = os.path.join(output_base_dir, framework, api_endpoint)
            save_path = os.path.join(save_dir, f"{ip_port}.json")

            success = save_response_json(url, save_path)
            if success:
                save_progress(url)

if __name__ == "__main__":
    main()
