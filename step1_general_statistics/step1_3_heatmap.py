import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# 读取 CSV
df = pd.read_csv("step1_3_port/framework_port_matrix.csv")

# 设置第一列为索引
df.set_index('framework', inplace=True)

# 转置 DataFrame：port 变为行，framework 变为列
df = df.T

# 设置画布尺寸（根据列数动态调节）
plt.figure(figsize=(18, 5))
# plt.figure(figsize=(max(12, len(df.columns) * 1.3), max(6, len(df.index) * 0.6)))

# 创建热力图
heatmap = sns.heatmap(
    df,
    annot=True,
    fmt="d",
    cmap="YlGnBu",  # ✅ 可选配色: "viridis", "rocket", "coolwarm", "Blues", "magma", etc.
    linewidths=0.4,
    square=False,
    annot_kws={"size": 15},
    cbar_kws={"shrink": 1, "pad": 0.02}
)

# 设置标签
heatmap.set_xlabel("LLM Deployment Framework", fontsize=16, labelpad=-5)
heatmap.set_ylabel("Port", fontsize=16)

# 设置坐标轴字体大小与旋转
heatmap.tick_params(labelsize=16)
plt.xticks(rotation=45, ha="right", fontsize=16)
plt.yticks(rotation=0, fontsize=14)

# 设置颜色条样式
cbar = heatmap.collections[0].colorbar
cbar.ax.tick_params(labelsize=15)
cbar.set_label('Number of LLM Services', fontsize=16, rotation=90, labelpad=10)

# 布局调整并保存
plt.tight_layout()
plt.savefig("step1_3_port/port_heatmap.pdf", format="pdf", bbox_inches="tight")
plt.show() 