import pandas as pd
import matplotlib.pyplot as plt

plt.rcParams['font.family'] = 'AppleGothic'
plt.rcParams['axes.unicode_minus'] = False

df = pd.read_csv('일본_방문객_전처리.csv')

month_order = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.']
df_monthly = df[['Month (abbr)', 'average']].drop_duplicates()
df_monthly['Month_sort'] = pd.Categorical(df_monthly['Month (abbr)'], categories=month_order, ordered=True)
df_monthly = df_monthly.sort_values('Month_sort').reset_index(drop=True)

plt.figure(figsize=(10, 5))
plt.plot(df_monthly['Month (abbr)'], df_monthly['average'], color='orange', marker='o', linewidth=2, label='월별 평균 방문객 수')

plt.title('월별 일본 방문 한국인 관광객 수 평균', fontsize=14, pad=15)
plt.xlabel('월 (Month)', fontsize=11)
plt.ylabel('방문객 수 (명)', fontsize=11)
plt.grid(True, linestyle='--', alpha=0.5)
plt.legend()

plt.show()