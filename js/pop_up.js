import { places } from './content_object.js';
import { drawMap } from './draw_map.js';

let part = 0;
let keyword = '';

$(document).ready(function () {
    console.log('hello');
    let random = localStorage.getItem('random');
    if (localStorage.getItem('random') === '지역별 추천') {
        $('.content_top').text(random);
        $('.keyword-wrap').addClass('hidden');
        showMap();
    } else if (localStorage.getItem('random') === '키워드별 추천') {
        $('.content_top').text(random);
        $('.map-wrap').addClass('hidden');
    }
});
$('button').click(function () {
    keyword = $(this).text();
    console.log(keyword);
    showKeywords();
});

function showMap() {
    drawMap();
    // 다각형에 mouseover 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 변경합니다
    // 지역명을 표시하는 커스텀오버레이를 지도위에 표시합니다
}
export function settingEvent(area, map, polygon, customOverlay) {
    kakao.maps.event.addListener(polygon, 'mouseover', function (mouseEvent) {
        polygon.setOptions({ fillColor: '#09f' });
        customOverlay.setPosition(mouseEvent.latLng);
        customOverlay.setMap(map);
    });

    // 다각형에 mousemove 이벤트를 등록하고 이벤트가 발생하면 커스텀 오버레이의 위치를 변경합니다
    kakao.maps.event.addListener(polygon, 'mousemove', function (mouseEvent) {
        customOverlay.setPosition(mouseEvent.latLng);
    });

    // 다각형에 mouseout 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 원래색으로 변경합니다
    // 커스텀 오버레이를 지도에서 제거합니다
    kakao.maps.event.addListener(polygon, 'mouseout', function () {
        polygon.setOptions({ fillColor: '#fff' });
        customOverlay.setMap(null);
    });

    // 다각형에 click 이벤트를 등록하고 이벤트가 발생하면 다각형의 이름과 면적을 인포윈도우에 표시합니다
    kakao.maps.event.addListener(polygon, 'click', function (mouseEvent) {
        clickEvent(area);
    });
}
function clickEvent(area) {
    console.log(area.name);
    if (area.name === 'part1') {
        part = 1;
    } else if (area.name === 'part2') {
        part = 2;
    } else if (area.name === 'part3') {
        part = 3;
    } else if (area.name === 'part4') {
        part = 4;
    }

    const partObject = Object.values(places).filter((e) => e.part === part);
    const rand = Math.floor(Math.random() * partObject.length);

    const contentName = partObject[rand].name;
    localStorage.setItem('name', contentName);
    window.location.href = '../html/show_content.html';
}
function showKeywords() {
    const tagObject = Object.values(places).filter((e) => e.tag.includes(keyword));
    const rand = Math.floor(Math.random() * tagObject.length);

    const contentName = tagObject[rand].name;
    localStorage.setItem('name', contentName);
    localStorage.setItem('page', 'random_recommand');
    window.location.href = '../html/show_content.html';
}
