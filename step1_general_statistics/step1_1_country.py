import json
import csv
from collections import defaultdict

# 加载你的 JSON 数据
with open('llm_services.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# 用 (longitude, latitude) 作为 key 来统计数量
location_counts = defaultdict(int)

for entry in data:
    lon = entry.get("longitude")
    lat = entry.get("latitude")
    if lon and lat:
        key = (lon.strip(), lat.strip())
        location_counts[key] += 1

# 输出为 CSV 文件
with open('llm_location_counts.csv', 'w', newline='', encoding='utf-8') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(["longitude", "latitude", "count"])
    for (lon, lat), count in location_counts.items():
        writer.writerow([lon, lat, count])

print("✅ 导出成功：llm_location_counts.csv")