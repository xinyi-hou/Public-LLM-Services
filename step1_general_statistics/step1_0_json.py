import os
import pandas as pd
import json

# 中文列名 -> 英文列名映射字典
column_mapping = {
    "主机名": "host",
    "网站标题": "title",
    "IP地址": "ip",
    "域名": "domain",
    "端口": "port",
    "协议名": "protocol",
    "网站server": "server",
    "资产的URL链接": "link",
    "证书持有者组织": "cert.subject.org",
    "证书持有者通用名称": "cert.subject.cn",
    "证书颁发者组织": "cert.issuer.org",
    "证书颁发者通用名称": "cert.issuer.cn",
    "国家代码": "country",
    "国家名": "country_name",
    "区域": "region",
    "城市": "city",
    "地理位置 经度": "longitude",
    "地理位置 纬度": "latitude",
    "asn编号": "asn",
    "asn组织": "org",
    "操作系统": "os",
    "icp备案号": "icp",
    "jarm 指纹": "jarm",
    "基础协议": "base_protocol",
    "ja3s指纹信息": "cert.ja3s",
    "tls协议版本": "tls.version"
}

# 设置目标文件夹
folder = "fofa"

# 用于存储所有合并后的数据
all_data = []

# 遍历文件夹下所有 .xlsx 文件
for filename in os.listdir(folder):
    if filename.endswith(".xlsx"):
        filepath = os.path.join(folder, filename)
        framework_name = os.path.splitext(filename)[0]  # 去掉扩展名

        try:
            # 读取 Excel 文件
            df = pd.read_excel(filepath)

            # 重命名列（中文 → 英文）
            df.rename(columns=column_mapping, inplace=True)

            # 只保留我们关心的字段（按顺序）
            valid_columns = [col for col in column_mapping.values() if col in df.columns]
            df = df[valid_columns]

            # 替换所有空值为 ""（字符串）
            df = df.astype(str)
            df.fillna("", inplace=True)

            # 添加 framework 字段（作为第一列）
            df.insert(0, "framework", framework_name)

            # 转成字典列表并合并
            all_data.extend(df.to_dict(orient="records"))

            print(f"✅ 处理完成: {filename}，记录数: {len(df)}")

        except Exception as e:
            print(f"❌ 读取失败: {filename}，错误信息: {e}")

# 写入 JSON 文件
output_file = "merged_llm_assets.json"
with open(output_file, "w", encoding="utf-8") as f:
    json.dump(all_data, f, ensure_ascii=False, indent=2)

print(f"\n🎉 所有文件合并完成！共 {len(all_data)} 条记录，已保存为：{output_file}")