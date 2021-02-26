import requests
from pymongo import MongoClient
from bs4 import BeautifulSoup

client = MongoClient('localhost', 27017)
db = client.dbhh99

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'
}
url = 'https://movie.naver.com/movie/sdb/rank/rpeople.nhn'
data = requests.get(url, headers=headers)
soup = BeautifulSoup(data.text, 'html.parser')

trs = soup.select('#old_content > table > tbody > tr')
base = 'https://movie.naver.com/'
db.stars.drop()
for tr in trs:
    if tr.select_one('td.title > a') is not None:
        name = tr.select_one('td.title > a').text
        a = tr.select_one('td.title > a')['href']
        a = base + a
        # print(name)

        data = requests.get(a, headers=headers)
        soup = BeautifulSoup(data.text, 'html.parser')

        if soup.select_one(
                '#content > div.article > div.mv_info_area > div.mv_info.character > dl > dd> a') is not None:
            title = soup.select_one(
                '#content > div.article > div.mv_info_area > div.mv_info.character > dl > dd> a').text
            image = soup.select_one('#content > div.article > div.mv_info_area > div.poster > img')['src']

            doc = {
                'name': name,
                'title': title,
                'image': image,
                'like': 0
            }
            db.stars.insert_one(doc)
            print(name + ' 완료')

# old_content > table > tbody > tr:nth-child(2) > td.title > a
# content > div.article > div.mv_info_area > div.poster > img
# content > div.article > div.mv_info_area > div.mv_info.character > dl > dd:nth-child(2) > a:nth-child(1)
