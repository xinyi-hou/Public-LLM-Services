import os
import json
import aiohttp
import asyncio
from urllib.parse import urljoin

# ----------------- Configurations -----------------

INPUT_DIR = 'step3_1_response/ComfyUI/extensions'  # 输入json文件目录
OUTPUT_DIR = 'step3_4_comfyui/extensions'             # 保存的js文件目录

TIMEOUT = 15                      # 请求超时秒数
MAX_CONCURRENCY = 20              # 最大并发数

FAILED_LOG = 'step3_4_comfyui/failed_downloads.txt'      # 下载失败记录文件
PROGRESS_LOG = 'step3_4_comfyuidownloaded_success.txt'  # 下载成功记录文件

sem = asyncio.Semaphore(MAX_CONCURRENCY)  # 并发控制器

# ----------------- Helper Functions -----------------

def load_downloaded():
    """读取已完成下载的URL列表"""
    if os.path.exists(PROGRESS_LOG):
        with open(PROGRESS_LOG, 'r') as f:
            return set(line.strip() for line in f if line.strip())
    return set()

def save_downloaded(url):
    """保存成功下载的URL"""
    with open(PROGRESS_LOG, 'a') as f:
        f.write(url + '\n')

def save_failed(url):
    """保存下载失败的URL"""
    with open(FAILED_LOG, 'a') as f:
        f.write(url + '\n')

async def download_js(session, base_url, relative_path, save_dir):
    """下载单个JS文件"""
    await sem.acquire()
    try:
        full_url = urljoin(base_url + '/', relative_path.lstrip('/'))
        filename = relative_path.lstrip('/').replace('/', '_')  # 转成 core_widgetInputs.js 格式
        save_path = os.path.join(save_dir, filename)

        if full_url in downloaded_urls:
            print(f"[=] Already downloaded: {full_url}")
            return

        async with session.get(full_url, timeout=TIMEOUT) as resp:
            if resp.status == 200:
                content = await resp.text()
                os.makedirs(save_dir, exist_ok=True)
                with open(save_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                save_downloaded(full_url)
                print(f"[+] Downloaded: {full_url}")
            else:
                print(f"[!] Failed {resp.status} for {full_url}")
                save_failed(full_url)

    except Exception as e:
        print(f"[!] Error downloading {full_url}: {e}")
        save_failed(full_url)
    finally:
        sem.release()

# ----------------- Main Async Logic -----------------

async def main():
    tasks = []

    connector = aiohttp.TCPConnector(limit_per_host=MAX_CONCURRENCY)
    async with aiohttp.ClientSession(connector=connector) as session:
        for filename in os.listdir(INPUT_DIR):
            if filename.endswith('.json'):
                ip_port = filename[:-5]  # 去掉.json
                filepath = os.path.join(INPUT_DIR, filename)
                save_folder = os.path.join(OUTPUT_DIR, ip_port)

                with open(filepath, 'r', encoding='utf-8') as f:
                    try:
                        extensions = json.load(f)
                    except Exception as e:
                        print(f"[!] Failed to parse {filename}: {e}")
                        continue

                base_url = f"http://{ip_port}"

                for relative_path in extensions:
                    tasks.append(download_js(session, base_url, relative_path, save_folder))

        await asyncio.gather(*tasks)

# ----------------- Entry Point -----------------

if __name__ == "__main__":
    downloaded_urls = load_downloaded()
    asyncio.run(main())
