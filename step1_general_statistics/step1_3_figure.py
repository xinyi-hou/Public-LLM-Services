import pandas as pd
import matplotlib.pyplot as plt

# 1. 原始数据
data = [
    ["443", "TLS 1.3", 13660],
    ["443", "nan", 96481],
    ["443", "TLS 1.2", 3057],
    ["443", "TLS 1.0", 2],
    ["11434", "nan", 32334],
    ["11434", "TLS 1.3", 25],
    ["11434", "TLS 1.2", 2],
    ["80", "nan", 13978],
    ["80", "TLS 1.3", 795],
    ["80", "TLS 1.2", 148],
    ["8080", "nan", 14045],
    ["8080", "TLS 1.2", 10],
    ["8080", "TLS 1.3", 25],
    ["3000", "TLS 1.3", 18],
    ["3000", "nan", 8098],
    ["3000", "TLS 1.2", 2],
    ["8888", "nan", 7792],
    ["8888", "TLS 1.0", 12],
    ["8888", "TLS 1.3", 91],
    ["8888", "TLS 1.2", 23],
    ["8000", "nan", 4931],
    ["8000", "TLS 1.3", 28],
    ["8000", "TLS 1.2", 7],
    ["8089", "nan", 999],
    ["8089", "TLS 1.3", 2],
    ["9999", "nan", 940],
    ["9999", "TLS 1.2", 2],
    ["9999", "TLS 1.0", 2],
    ["9999", "TLS 1.3", 4],
    ["8085", "nan", 933],
    ["8085", "TLS 1.2", 1],
    ["8085", "TLS 1.3", 3],
]

# DataFrame
df = pd.DataFrame(data, columns=["port", "tls_version", "count"])
port_order = ["443", "11434", "80", "8080", "3000", "8888", "8000", "8089", "9999", "8085"]
df["port"] = pd.Categorical(df["port"], categories=port_order, ordered=True)
pivot_df = df.pivot_table(index="port", columns="tls_version", values="count", fill_value=0)

# 颜色映射
color_map = {
    "TLS 1.3": "#8ca253",
    "TLS 1.2": "#81afc6",
    "TLS 1.0": "#d8b979",
    "nan": "#ca8d74",
}

# 绘图
fig, ax = plt.subplots(figsize=(7, 4.5))
x = range(len(pivot_df))
bottom = [0] * len(pivot_df)

for version in ["TLS 1.0", "TLS 1.2", "TLS 1.3", "nan"]:
    values = pivot_df[version] if version in pivot_df.columns else [0] * len(pivot_df)
    
    bars = ax.bar(
        x,
        values,
        bottom=bottom,
        width=0.65,
        label=version,
        color=color_map.get(version, "#ccc"),
        edgecolor="black",
        linewidth=1,
    )
    
    # ✅ 在每个条形上方添加标签
    for bar in bars:
        height = bar.get_height()
        if height > 0:  # 避免显示 0
            ax.text(
                bar.get_x() + bar.get_width() / 2,
                bar.get_y() + height + 0.5,   # +5 是为了稍微离开柱子顶部
                f"{int(height)}",
                ha="center",
                va="bottom",
                fontsize=9.5
            )

    # 更新 bottom 累加
    bottom = [i + j for i, j in zip(bottom, values)]

# 图形美化
ax.set_xticks(x)
ax.set_xticklabels(pivot_df.index, rotation=0,fontsize=11)
ax.set_xlabel("Port",fontsize=12)
ax.set_ylabel("Number of Services (log scale)1",fontsize=12)
ax.set_yscale("log")
ax.legend(title="TLS Version")
ax.grid(False)

plt.tight_layout()
plt.savefig("step1_3_port/port.pdf", format="pdf", bbox_inches="tight")
plt.show()
