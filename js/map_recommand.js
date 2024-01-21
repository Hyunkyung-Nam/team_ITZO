import { drawMap, initSetting, resetContainer } from './draw_map.js';

drawMap();

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
    window.location.href = '../html/show_content.html';
});
