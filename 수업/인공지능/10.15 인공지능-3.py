import pandas as pd
import re

try:
    df = pd.read_csv('hollys1_2.csv', encoding='cp949')
except:
    df = pd.read_csv('hollys1.csv', encoding='utf-8')

def classify_and_reason(address):
    if pd.isna(address):
        return '결측값', '주소 정보 없음'

    address = str(address).strip()

    no_value = r'(1층?\s*[~,\-─-]\s*[23]층?|2층?\s*[~,\-─-]\s*3층?|1,2층|1,2,3층|1F-2F|지하.*2층)'
    if re.search(no_value, address):
        return '결측값', '1~2층 등 복층/범위 매장으로 단독 2층 매장 아님'

    mix = r'1[0-9]{2}호?\s*,\s*2[0-9]{2}호?'
    if re.search(mix, address):
        return '결측값', '1층 호수(1XX호)와 2층 호수(2XX호)가 함께 기재된 복층 매장임'

    if re.search(r'2층', address):
        return '2층 매장', "주소에 '2층' 표기 포함됨"
    
    if re.search(r'2[Ff]', address):
        return '2층 매장', "주소에 '2F' 표기 포함됨"
    
    match = re.search(r'(2[0-9]{2}호)', address)
    if match:
        return '2층 매장', f"주소에 2층 호수({match.group(1)}) 표기 포함됨"

    return '결측값', '2층 관련 표기 없음'

df['floor_type'], df['reason'] = zip(*df['address'].apply(classify_and_reason))

df_2nd_floor = df[df['floor_type'] == '2층 매장'].copy()
df_2nd_floor.to_csv('hollys_2층매장.csv', encoding='utf-8-sig', index=False)

print("층수 분류 결과")
print(df['floor_type'].value_counts())
print('\nhollys_2층매장.csv 저장 완료 (%d개 매장)' % len(df_2nd_floor))