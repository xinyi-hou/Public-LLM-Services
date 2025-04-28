import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns


# 构造数据
data = {
    "domain": [
        "nellasushi.es", "nellasushi.es",
        "mysuccess.be", "mysuccess.be",
        "human-rights-law.eu", "human-rights-law.eu",
        "ilgermoglioshop.it", "ilgermoglioshop.it",
        "zdrowysobiecin.pl", "zdrowysobiecin.pl",
        "tom-paintor.fr", "tom-paintor.fr",
        "psy-meganedubosclard.fr", "psy-meganedubosclard.fr",
        "feestvoorjou.nl", "feestvoorjou.nl",
        "dj-omega.pl", "dj-omega.pl",
    ],
    "ip": [
        "172.67.134.67", "104.21.25.133",
        "172.67.174.151", "104.21.40.25",
        "104.21.92.138", "172.67.194.136",
        "104.21.85.79", "172.67.203.216",
        "172.67.195.87", "104.21.68.122",
        "104.21.81.185", "172.67.163.98",
        "172.67.170.85", "104.21.55.29",
        "172.67.194.112", "104.21.33.253",
        "172.67.153.126", "104.21.3.98"
    ],
    "count": [
        3348, 2858,
        1146, 1124,
        1076, 253,
        935, 395,
        451, 424,
        339, 334,
        322, 182,
        275, 227,
        270, 245
    ]
}

df = pd.DataFrame(data)

# 获取唯一 domain 和 ip
domains = df['domain'].unique()
ips = df['ip'].unique()

# 准备绘图参数
bar_height = 0.35  # 每个柱子的高度
group_gap = 0.2    # 每组之间的间距
n_ips = len(df['ip'].unique())

# 为每个柱子计算 y 位置
positions = []
labels = []
y_base = 0

for domain in domains:
    subset = df[df['domain'] == domain]
    for i in range(len(subset)):
        positions.append(y_base - i * bar_height)
        labels.append(domain)
    y_base -= (len(subset) * bar_height + group_gap)

# 创建图
fig, ax = plt.subplots(figsize=(5.4, 6))  # 图稍微收窄

base_colors = sns.color_palette("tab20b", len(df))  # 或 "Set2", "pastel", "bright", "dark", "muted"
alpha = 0.8  # 透明度：0 = 完全透明，1 = 不透明
colors = [(r, g, b, alpha) for (r, g, b) in base_colors]

for i, row in df.iterrows():
    ax.barh(
        y=positions[i],
        width=row['count'],
        height=bar_height * 0.9,
        color=colors[i],
        edgecolor='black',   # ✅ 加边框
        linewidth=0.8,        # ✅ 可选：边框粗细（默认 1.0）
        label=row['ip']
    )
    ax.text(row['count'] + 10, positions[i], str(row['count']), va='center', fontsize=9.5)

# 柱子的最大值
max_value = df['count'].max()

# 设置 X 轴最大值，仅比最大值多 50（用于显示右侧数字）
ax.set_xlim(0, max_value + 410)

# ✅ 去重图例 + 下移
handles, labels = ax.get_legend_handles_labels()
by_label = dict(zip(labels, handles))
ax.legend(
    by_label.values(),
    by_label.keys(),
    title="IP Address",
    loc="upper right",
    bbox_to_anchor=(0.93, 0.73),  # ⬅️ 适当向下调整
    fontsize=8.8,
    title_fontsize=9.5
)

# 设置 Y 轴标签
ax.set_yticks([np.mean(positions[i:i+2]) for i in range(0, len(positions), 2)])
ax.set_yticklabels(domains)
# ax.set_yticklabels(domains, rotation=45, ha='right')
ax.set_xlabel("Number of LLM Services",fontsize=11,labelpad=10)
ax.set_ylabel("High-Traffic Domains",fontsize=11,labelpad=-5)

plt.tight_layout()
plt.savefig("step1_2_domain/domain.pdf", format="pdf", bbox_inches="tight")
plt.show()