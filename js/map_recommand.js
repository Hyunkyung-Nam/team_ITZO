import { drawMap, initSetting, resetContainer, part } from './draw_map_recommand.js';

let map;

window.onpageshow = function (event) {
    if (event.persisted || (window.performance && window.performance.navigation.type == 2)) {
        map = drawMap(true);
    } else {
        map = drawMap(false);
    }
    if (window.matchMedia('(max-width: 768px)').matches) {
        map.setLevel(10);
    } else {
        map.setLevel(9);
    }
};

$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.btn_top_move').fadeIn();
    } else {
        $('.btn_top_move').fadeOut();
    }
});

window.onresize = function (event) {
    var innerWidth = window.innerWidth;
    innerWidth <= '768' ? mapSizeSmall() : mapSizeBig();
};

$('.reset-map').click(function () {
    $('.page-numbering').addClass('hide');
    $('.content-container').addClass('hide');
    resetContainer();
    initSetting();

    setTimeout(() => {
        $('.content-container').removeClass('hide');
        $('.page-numbering').empty();
    }, 100);
});

$('.content-container').click(function () {
    const contentName = $(this).children('div:last').children('.content-preview-header').text();
    localStorage.setItem('name', contentName);
    localStorage.setItem('page', 'map_recommand');
    localStorage.setItem('part', part);
    window.location.href = '../html/show_content.html';
});

function mapSizeSmall() {
    map.relayout();
    map.setCenter(new kakao.maps.LatLng(37.566826, 126.9786567));
    map.setLevel(10, { animate: true });
}
function mapSizeBig() {
    map.relayout();
    map.setCenter(new kakao.maps.LatLng(37.566826, 126.9786567));
    map.setLevel(9, { animate: true });
}
