import csv

def generate_urls(service_csv, api_txt, output_txt):
    # 读取ip和port
    services = []
    with open(service_csv, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            ip = row['ip'].strip()
            port = row['port'].strip()
            services.append((ip, port))

    # 读取api列表
    apis = []
    with open(api_txt, 'r', encoding='utf-8') as f:
        for line in f:
            api = line.strip()
            if api:
                apis.append(api)

    # 拼接生成url
    urls = []
    for ip, port in services:
        for api in apis:
            url = f"http://{ip}:{port}{api}"
            urls.append(url)

    # 保存到输出文件
    with open(output_txt, 'w', encoding='utf-8') as f:
        for url in urls:
            f.write(url + '\n')

    print(f"[+] Generated {len(urls)} urls and saved to {output_txt}")

if __name__ == "__main__":
    generate_urls(
        service_csv='step3_2_ollama/ollama_services.csv',
        api_txt='step3_2_ollama/ollama_api.txt',
        output_txt='step3_2_ollama/ollama_urls.txt'
    )
