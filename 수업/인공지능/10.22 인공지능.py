import pandas as pd

df = pd.read_csv('일본 한국인 방문객 수.csv')

df_clean = df.drop(columns=['Country/Area', '집계(Growth Rate(%))'])

df_clean['average'] = df_clean.groupby('Month (abbr)')['합계(Visitor Arrivals)'].transform('mean').round(0)

month_order = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.']
df_clean['Month_sort'] = pd.Categorical(df_clean['Month (abbr)'], categories=month_order, ordered=True)

df_result = df_clean.sort_values(by=['Month_sort', 'Year']).drop(columns=['Month_sort']).reset_index(drop=True)

print(df_result)
df_result.to_csv('일본_방문객_전처리.csv', index=False, encoding='utf-8-sig')