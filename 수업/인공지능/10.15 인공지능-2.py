import ssl
import time
import urllib.request
from bs4 import BeautifulSoup
import pandas as pd


def Pascucci_store(result):
    context = ssl._create_unverified_context()
    for page in range(1, 49):
        Pascucci = ("https://www.caffe-pascucci.co.kr/store/storeList.asp?page=%d"% page)
        print(Pascucci)

        html = urllib.request.urlopen(Pascucci, context=context)
        soupPas = BeautifulSoup(html, "html.parser")
        tag_tbody = soupPas.find("tbody")

        for store in tag_tbody.find_all("tr"):
            if len(store) <= 3:
                break

            store_td = store.find_all("td")
            store_name = store_td[0].get_text(strip=True)
            store_si = store_td[1].get_text(strip=True)
            store_address = store_td[2].get_text(strip=True)
            store_time = store_td[3].get_text(strip=True)
            store_phone = store_td[4].get_text(strip=True)
            result.append([
                store_name,
                store_si,
                store_address,
                store_time,
                store_phone,
            ])

        time.sleep(1)

    return

def main():
    result = []
    print("Pascucci store crawling")
    Pascucci_store(result)
    Pas_tbl = pd.DataFrame(result, columns=("store name", "sido", "address", "time", "phone"))
    Pas_tbl.to_csv("./Pascucci1.csv", encoding="utf-8-sig", mode="w", index=True)
    print("./Pascucci1.csv 파일저장 완료")

if __name__ == "__main__":
    main()