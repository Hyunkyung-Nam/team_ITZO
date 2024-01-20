import { places } from './content_object.js';
let part = 0;
let partContentNum = 0;
export function drawMap() {
    // 지도에 폴리곤으로 표시할 영역데이터 배열입니다
    let areas = [];

    /* 1. JSON 파일을 읽어들여 areas 배열을 채워넣는 작업 */

    // 1) getJSON도 ajax 메소드와 같이 async(비동기) 방식으로 동작하는데, 순차실행을 위해 이걸 강제로 sync 방식으로 동작하도록 함.
    $.ajaxSetup({
        async: false,
    });

    // 2) getJSON 메소드를 이용해 JSON 파일을 파싱함
    $.getJSON('../json/seoul_map.json', function (geojson) {
        let units = geojson.features; // 파일에서 key값이 "features"인 것의 value를 통으로 가져옴(이것은 여러지역에 대한 정보를 모두 담고있음)
        $.each(units, function (index, unit) {
            // 1개 지역씩 꺼내서 사용함. val은 그 1개 지역에 대한 정보를 담음
            let coordinates = []; //좌표 저장할 배열
            let name = ''; // 지역 이름

            coordinates = unit.geometry.coordinates; // 1개 지역의 영역을 구성하는 도형의 모든 좌표 배열을 가져옴
            name = unit.properties.SIG_KOR_NM; // 1개 지역의 이름을 가져옴

            let ob = new Object();
            ob.name = name;
            ob.path = [];

            $.each(coordinates[0], function (index, coordinate) {
                // []로 한번 더 감싸져 있어서 index 0번의 것을 꺼내야 배열을 접근가능.
                ob.path.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]));
            });

            areas[index] = ob;
        }); //each
    }); //getJSON

    /* 2. 지도 띄우기 */

    let mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
            center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
            level: 9, // 지도의 확대 레벨
        };

    let map = new kakao.maps.Map(mapContainer, mapOption),
        customOverlay = new kakao.maps.CustomOverlay({}),
        infowindow = new kakao.maps.InfoWindow({ removable: true });

    map.setMinLevel(9); //최소레벨9
    map.setMaxLevel(10); //최소레벨10
    map.setDraggable(false); //지도 이동 막기
    map.setZoomable(false); //지도 확대축소 막기
    map.setKeyboardShortcuts(false); // 키보드 방향키(+,-)로 확대 축소 막기

    /* 3. 폴리곤 도형을 지도위에 띄우고 마우스 이벤트 붙이기 */

    if (window.matchMedia('(max-width: 768px)').matches) {
        map.setLevel(10);
    } else {
        map.setLevel(9);
    }
    // 지도에 영역데이터를 폴리곤으로 표시합니다
    for (let i = 0, len = areas.length; i < len; i++) {
        displayArea(areas[i], map, customOverlay);
    }
}
// 다각형을 생상하고 이벤트를 등록하는 함수입니다
function displayArea(area, map, customOverlay) {
    // 다각형을 생성합니다
    let polygon = new kakao.maps.Polygon({
        map: map, // 다각형을 표시할 지도 객체
        path: area.path,
        strokeWeight: 2,
        strokeColor: '#004c80',
        strokeOpacity: 0.8,
        fillColor: '#fff',
        fillOpacity: 0.7,
    });

    // 다각형에 mouseover 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 변경합니다
    // 지역명을 표시하는 커스텀오버레이를 지도위에 표시합니다
    kakao.maps.event.addListener(polygon, 'mouseover', function (mouseEvent) {
        polygon.setOptions({ fillColor: '#09f' });

        customOverlay.setContent('<div class="area">' + area.name + '</div>');

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
        const contentCotainer = $('.content-container');
        contentCotainer.removeClass('hide');
        $('.page-numbering').empty();
        clickEvent(area);
    });
}
function clickEvent(area) {
    if (area.name === 'part1') {
        part = 1;
        setContentContainer(area);
    } else if (area.name === 'part2') {
        part = 2;
        setContentContainer(area);
    } else if (area.name === 'part3') {
        part = 3;
        setContentContainer(area);
    } else if (area.name === 'part4') {
        part = 4;
        setContentContainer(area);
    }
}
//content container를 채우는 기능 다섯개만 만든다.
function setContentContainer(area) {
    let contentCount = 0;

    for (let key in places) {
        if (places[key].part === part) {
            if (contentCount < 6) {
                setContent(key, contentCount);
            }
            contentCount++;
        }
    }
    partContentNum = contentCount;
    if (contentCount < 6) {
        for (let i = contentCount; i < 6; i++) {
            hideContent(i);
        }
    }
    const pageNumber = Math.ceil(contentCount / 6);
    for (let i = 1; i <= pageNumber; i++) {
        $('.page-numbering').append(`<button type='button'>[${i}]  </button>`);
        $('.page-numbering')
            .children()
            .css({ color: 'white', 'background-color': 'unset', border: '0', cursor: 'pointer' });
    }
    createButtonEvent();
}
function resetContent(pageNum) {
    let totalContentCount = 0;
    let showItemCount = 0;
    let itemNum = (pageNum - 1) * 6;

    for (let key in places) {
        if (places[key].part === part) {
            if (totalContentCount >= itemNum && showItemCount < 6) {
                setContent(key, showItemCount);
                showItemCount++;
            }
            totalContentCount++;
        }
    }

    if (showItemCount < 6) {
        for (let i = showItemCount; i < 7; i++) {
            hideContent(i);
        }
    }
}

function setContent(key, contentCount) {
    let childCount = `eq(${contentCount})`;
    $('.content-img-section').children(`img:${childCount}`).attr('src', places[key].img);
    $('.content-img-section').children(`img:${childCount}`).attr('style', 'height:140px');
    $(`.content-preview-header:${childCount}`).text(places[key].name);
    $(`.content-preview-address:${childCount}`).text(places[key].address);
    const tagString = setTag(places[key].tag);
    $(`.content-preview-tag:${childCount}`).text(tagString);
}
function hideContent(contentCount) {
    let childCount = `eq(${contentCount})`;
    $(`.content-container:${childCount}`).addClass('hide');
}
function setTag(tags) {
    let tagString = '';
    for (let tag of tags) {
        tagString += `#${tag} `;
    }
    return tagString;
}
function createButtonEvent() {
    $('button').on('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' }); //최상단으로 스크롤 옮기기
        $('.content-container').removeClass('hide');
        let number = $(this).text().replace('[', '');
        number = Number(number.replace(']', ''));
        resetContent(number);
    });
}
