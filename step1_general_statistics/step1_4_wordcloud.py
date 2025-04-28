import pandas as pd
import matplotlib.pyplot as plt
from wordcloud import WordCloud

# 读取 CSV 文件（替换为你的实际路径）
csv_path = "step1_0_field/cert.subject.cn_stats.csv"
df = pd.read_csv(csv_path)

# # 清洗数据：排除空值，确保 'count' 为数字
# df["count"] = pd.to_numeric(df["count"], errors="coerce")
# df = df.dropna(subset=["cert.subject.cn", "count"])

# 替换 cert.subject.cn 中的 NaN 为字符串 'nan'
df["cert.subject.cn"] = df["cert.subject.cn"].fillna("nan")

# 转换 count 字段为数值型
df["count"] = pd.to_numeric(df["count"], errors="coerce")
df = df.dropna(subset=["count"])

# 构造词云输入字典：{CN: count}
word_freq = dict(zip(df["cert.subject.cn"], df["count"]))

# 生成词云对象
wordcloud = WordCloud(
    width=1000,
    height=600,
    background_color="white",
    colormap="inferno",  # 颜色风格可改为 'inferno'、'winter' 等
    max_words=200,
    contour_color='steelblue',
    contour_width=1
).generate_from_frequencies(word_freq)

# 绘制图形
plt.figure(figsize=(14, 8))
plt.imshow(wordcloud, interpolation="bilinear")
plt.axis("off")

# 保存为 PDF 文件
plt.tight_layout()
plt.savefig("step1_4_cert/cert.pdf")
plt.show()
