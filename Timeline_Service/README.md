</br>

<h1 align="center" style="color:red"> Spring/ Timeline_Service:zap: </h1>

</br></br>



</br>

## 🤠 Part

총 1인

- 정석진 : 프론트, 백엔드

## :rocket:기능

- 현재 생각나는 것을 가볍게 메모해서 저장할 수 있다.
- 작성된 메모를 수정하거나 삭제할 수 있다.
- 작성된지 24시간이 지나면 보이지 않는

</br>

## 🦄 프로젝트 썸네일

<p align="center">
<img src="https://github.com/strong1133/MyPL/blob/main/sample/mypl01.JPG?raw=true" width="70%"></img>
</p>

</br>

## :orange_book: 개발일지

:heavy_check_mark: Velog TIL  
https://velog.io/@strong1133

</br>

## :mag: 요약

- 해외축구 영국 프리미어 리그의 정보를 한 페이지에 모아서 볼 수 있는 정보 제공 서비스
- 네이버스포츠의 해외축구 데이터들을 크롤링 하여 db에 저장하고 화면에 뿌려주는 Selenium, Beautifulsoup 로직
- db의 최신화 확인 모듈을 만들어 주기적으로 실행 함으로써 최신화 상태 유지

</br>

## :closed_book: 기술

#### :orange_book: backend

- Python
- Flask
- Beautifulsoup
- Selenium
- BackgroundScheduler
- Mongodb - pymongo

#### :orange_book: frontend

- HTML
- CSS
- JavaScript
- JQuery

#### :orange_book: Hosting

- AWS: EC2
- ubuntu

</br>

## :package: 개발 환경

- Pycharm
- ubuntu, aws

</br>

## 📸 Schreenshot

#### :heavy_check_mark: 메인 화면

<p align="center">
<img src="https://github.com/strong1133/MyPL/blob/main/sample/mypl01.JPG?raw=true" width="90%"></img>
</p>

</br>

#### :heavy_check_mark: 순위표

<p align="center">
<img src="https://github.com/strong1133/MyPL/blob/main/sample/mypl_tables.JPG?raw=true" width="90%"></img>
</p>

</br>

#### :heavy_check_mark: 경기일정

<p align="center">
<img src="https://github.com/strong1133/MyPL/blob/main/sample/mypl_schedules.JPG?raw=true" width="90%"></img>
</p>

</br>

#### :heavy_check_mark: 스포츠 뉴스

<p align="center">
<img src="https://github.com/strong1133/MyPL/blob/main/sample/mypl_news.JPG?raw=true" width="90%"></img>
</p>

</br>

#### :heavy_check_mark: 선수 순위

<p align="center">
<img src="https://github.com/strong1133/MyPL/blob/main/sample/mypl_leaders.JPG?raw=true" width="90%"></img>
</p>

</br>

## :mag: 반응형

#### :heavy_check_mark: 네비게이션

<p align="center">
<img src="https://github.com/strong1133/MyPL/blob/main/sample/mypl_responsive01.JPG?raw=true" width="100%"></img>
</p>
<p align="center">
<img src="https://github.com치/strong1133/MyPL/blob/main/sample/mypl_responsive02.JPG?raw=true" width="100%"></img>
</p>

</br>


## 💽 Setting

- 패키지 설치  ```pip install -r requierments.txt```
- 실행 ``` python app.py ```
- localhost에서 실행 할 경우  
    ```client = MongoClient('localhost', 27017)```
- ubuntu로 실행시 크롬옵션 관련 이슈 발생시  
    1. 크롬버전 확인 ``` google-chrome --version ```
    2. 크롬 버전에 맞는 리눅스용 크롬드라이버를 다운받아 static>bin안에 넣어줘야함.
    3. 관련 블로그  
     https://somjang.tistory.com/entry/Ubuntu-Ubuntu-%EC%84%9C%EB%B2%84%EC%97%90-Selenium-%EC%84%A4%EC%B9%98%ED%95%98%EA%B3%A0-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0 


</br>

### 👑 After 프로젝트

- 로그인 시스템을 구축하여 회원별 설정 팀이나 선수에 관한 정보들의 그룹화
- CSS 적인 완성도 향상 계획
- 좀더 반응형적인 웹사이트 설계
  </br>
