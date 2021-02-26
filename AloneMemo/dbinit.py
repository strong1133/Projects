import requests
from pymongo import MongoClient
from bs4 import BeautifulSoup

client = MongoClient('localhost', 27017)
db = client.dbhh99

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'
}
url = 'https://movie.naver.com/movie/sdb/rank/rmovie.nhn?sel=pnt&date='
data = requests.get(url, headers=headers)
soup = BeautifulSoup(data.text, 'html.parser')
trs = soup.select('#old_content > table > tbody > tr')
base = 'https://movie.naver.com/'
db.moviememo.drop();
for tr in trs:
    if tr.select_one('td.title > div > a') is not None:
        a = tr.select_one('td.title > div > a').text
        link = tr.select_one('td.title > div > a')['href']
        link = base + link
        # print(a)
        data = requests.get(link, headers=headers)
        soup = BeautifulSoup(data.text, 'html.parser')
        title = soup.select_one('meta[property="og:title"]')['content']
        image = soup.select_one('meta[property="og:image"]')['content']
        desc = soup.select_one('meta[property="og:description"]')['content']
        doc = {
            'title': title,
            'image': image,
            'desc': desc
        }
        db.moviememo.insert_one(doc)
        print(title + ' => 완료')

# old_content > table > tbody > tr:nth-child(2) > td.title > div > a
