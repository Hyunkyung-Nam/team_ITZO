# 궁석궁석
---
<p align="center">
  <img src="https://github.com/Hyunkyung-Nam/team_ITZO/assets/153169614/38b4b5bd-b7ca-4e55-b3ba-4959b10a941c)" width="200" height="200" >
<p>
  
---
# team_ITZO
---
>* [포스코X코딩온] 풀스택 웹개발자 부트캠프 11기 1차프로젝트<br>
>* 개발기간 : 2024. 01. 13 ~ 2024. 01. 27   
---
# 프로젝트 소개
---
궁석궁석은 서울시 소재 문화유산 및 공공기관이 운영하는 장소 소개 및 추천 웹페이지 입니다.

---
# Stacks
---
<div>
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/fontawesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white">
</div>

---
# 화면구성
---

| 홈화면 페이지 | 테마별 추천 페이지 | 지역별 추천 페이지 | 랜덤 추천 페이지 |
| :--: | :--: |:--: | :--: |
|  <img src="https://github.com/Hyunkyung-Nam/team_ITZO/assets/153169614/478f62e4-b1be-42f4-8f28-00c2a8efe67f" width="400" height="400" >| <img src="https://github.com/Hyunkyung-Nam/team_ITZO/assets/153169614/e9cb1084-3fbc-4319-a69a-0df206c3c327" width="400" height="400" >|<img src="https://github.com/Hyunkyung-Nam/team_ITZO/assets/153169614/49d9741d-0116-4417-bffe-1124ca65fdc3" width="400" height="400" >|<img src="https://github.com/Hyunkyung-Nam/team_ITZO/assets/153169614/eff2a69a-0709-4d92-9b9d-c5548407e9b2" width="400" height="400" >|
___
# 주요 기능
---
1. 테마별 추천기능
  * [고궁/절], [박물관/미술관/기념관], [공원], [역사적명소] 네가지 테마에 해당하는 장소 추천
2. 지역별 추천 페이지
  * 서울시를 4구역으로 나눠 구역별 장소 추천
3. 랜덤 추천 페이지
  * 전체 중 랜덤추천 / 지역을 선택하면 해당 지역에서 랜덤추천 / 키워드를 선택하여 해당 키워드에서 랜덤추천
---
# 아키텍쳐
---
```bash
├── README.md
├── css
│   ├── header_footer.css
│   ├── home.css
│   ├── map_recommand.css
│   ├── pop_up.css
│   ├── random_recommand.css
│   ├── show_content.css
│   ├── theme_hashtag_final.css
│   └── theme_main.css
├── html
│   ├── home.html
│   ├── map_recommand.html
│   ├── pop_up.html
│   ├── random_recommand.html
│   ├── show_content.html
│   ├── theme_hashtag_final.html
│   ├── theme_historical_place_hashtag.html
│   ├── theme_main.html
│   ├── theme_museum_hashtag.html
│   ├── theme_palace_hashtag.html
│   └── theme_park_hashtag.html
├── img
│   ├── Bukchon Hanok Village.jpg
│   ├── bongeunsaTemple.jpg
│   ├── historical 2.jpg
│   ├── historical_area
│   │   ├── achasanseong.jpg
│   │   ├── amsa_dong_ruins.jpg
│   │   ├── bang_idong_gobungun.jpg
│   │   ├── bukchon_hanok_village.jpg
│   │   ├── bukhansan_dullegil_2gugan_sunlyegil.jpg
│   │   ├── heonineung.jpg
│   │   ├── jeongneung.jpg
│   │   ├── jongmyo.jpg
│   │   ├── sunjeong_hyohwanghu_yunssichinga.jpg
│   │   ├── taeneung_gwa_gangneung.jpg
│   │   ├── uirneung.jpg
│   │   ├── yangcheongoseongji.jpg
│   │   ├── yangcheonhyanggyo.jpg
│   │   └── yun_bong_gil_memorial_hall.jpg
│   ├── icon
│   │   ├── arrow-left-solid.svg
│   │   ├── arrow-right-solid.svg
│   │   ├── arrow-up-solid.svg
│   │   ├── circle-dot-solid.svg
│   │   ├── location-dot-solid.svg
│   │   ├── logo-10px.png
│   │   ├── logo-guseogguseog.jpeg
│   │   └── spinner-solid.svg
│   ├── museum
│   │   ├── hanseong_baekje_museum.jpg
│   │   ├── national_gugak_center.jpg
│   │   ├── national_modern_museum.jpg
│   │   ├── national_museum.jpg
│   │   ├── seodaemun_prison.jpg
│   │   ├── seoul_art_museum.jpg
│   │   └── war_memorial.jpg
│   ├── museum.jpg
│   ├── palace
│   │   ├── changdeokgung.jpg
│   │   ├── changgyeonggung.jpg
│   │   ├── deoksugung.jpg
│   │   ├── gyeongbokgung.jpg
│   │   ├── kyungheegung.jpg
│   │   └── unhyeongung.jpg
│   ├── palace.jpeg
│   ├── park
│   │   ├── bangi_dong_ecological_landscape_conservation_area.jpg
│   │   ├── dosan_park.jpg
│   │   ├── galsan_park.jpg
│   │   ├── gangseo_wetland_ecological_park.jpg
│   │   ├── gyeongchun_line_forest_road.jpg
│   │   ├── hongneung_arboretum.JPG
│   │   ├── hyochang_park.jpg
│   │   ├── naksan_park.jpg
│   │   ├── namsan_park.jpg
│   │   ├── olympic_park.jpg
│   │   ├── sayukshin_park.jpg
│   │   ├── seonyudo_park.jpg
│   │   ├── seoulforest.jpg
│   │   ├── sky_park.jpg
│   │   ├── yongma_falls_park.jpg
│   │   └── yongwangsan_park.jpg
│   ├── park.jpeg
│   ├── random
│   │   ├── historical_landmark-horizontal.jpg
│   │   ├── historical_landmark-vertical.jpg
│   │   ├── keyword-horizontal.jpg
│   │   ├── keyword-vertical.jpg
│   │   ├── map-horizontal.jpg
│   │   ├── map-vertical.jpg
│   │   ├── museum-horizontal.jpg
│   │   ├── museum-vertical.jpg
│   │   ├── palace:temple-horizontal.jpg
│   │   ├── palace:temple-vertical.jpg
│   │   ├── park-horizontal.jpg
│   │   ├── park-vertical.jpg
│   │   ├── random-horizontal.jpg
│   │   ├── random-vertical.jpg
│   │   └── seoul_map.jpg
│   └── temple
│       ├── bongeun_temple.jpg
│       ├── cheonchuk_temple.jpg
│       ├── daeseong_temple.jpg
│       ├── dalma_temple.jpg
│       ├── doseon_temple.jpg
│       ├── gaeun_temple.jpg
│       ├── geumsun_temple.jpg
│       ├── hwage_temple.jpg
│       ├── jinkwan_temple.jpg
│       └── jogye_temple.jpg
├── img_theme
│   ├── gyeongbokgung-palace.jpg
│   ├── historical_landmark.jpg
│   ├── museum_theme.jpg
│   └── park_theme.jpg
├── index.html
├── js
│   ├── content_object.js
│   ├── draw_map.js
│   ├── draw_map_home.js
│   ├── draw_map_recommand.js
│   ├── header_footer.js
│   ├── home.js
│   ├── latlng.js
│   ├── map_recommand.js
│   ├── pop_up.js
│   ├── random_recommand.js
│   ├── show_content.js
│   ├── theme_hashtag_final.js
│   ├── theme_historical_place_hashtag.js
│   ├── theme_main.js
│   ├── theme_museum_hashtag.js
│   ├── theme_palace_hashtag.js
│   └── theme_park_hashtag.js
└── json
    └── seoul_map.json

``
---





