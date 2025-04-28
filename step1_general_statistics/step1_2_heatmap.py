import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# 读取 CSV
df = pd.read_csv("step1_2_domain/domain_framework_no_nan.csv")

# 设置第一列为索引
df.set_index('domain', inplace=True)

# 设置画布尺寸（根据列数和行数动态调节）
plt.figure(figsize=(max(12, len(df.columns) * 1.2), max(6, len(df.index) * 0.5)))

# 创建热力图
heatmap = sns.heatmap(
    df,
    annot=True,
    fmt="d",
    cmap="YlGnBu",  # 可选配色: "viridis", "coolwarm", "magma", etc.
    linewidths=0.4,
    square=False,
    annot_kws={"size": 13},
    cbar_kws={"shrink": 1, "pad": 0.02}
)

# 设置标签
heatmap.set_xlabel("LLM Deployment Framework", fontsize=16, labelpad=10)
heatmap.set_ylabel("Domain", fontsize=16, labelpad=10)

# 设置坐标轴字体与刻度
heatmap.tick_params(labelsize=13)
plt.xticks(rotation=45, ha="right", fontsize=13)
plt.yticks(rotation=0, fontsize=12)

# 设置颜色条样式
cbar = heatmap.collections[0].colorbar
cbar.ax.tick_params(labelsize=13)
cbar.set_label('Number of LLM Services', fontsize=14, rotation=90, labelpad=10)

# 添加标题
plt.title("LLM Deployments per Domain and Framework", fontsize=18, pad=20)

# 自动调整布局并保存
plt.tight_layout()
plt.savefig("step1_2_domain/no_nan_heatmap.pdf", format="pdf", bbox_inches="tight")
plt.show()