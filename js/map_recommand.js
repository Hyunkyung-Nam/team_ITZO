import { drawMap, initSetting } from './draw_map.js';

drawMap();

$('.reset-map').click(function () {
    $('.content-container').removeClass('hide');
    $('.page-numbering').empty();
    initSetting();
});

$('.content-container').click(function () {
    const contentName = $(this).children('div:last').children('.content-preview-header').text();
    localStorage.setItem('name', contentName);
    window.location.href = '../html/show_content.html';
});
