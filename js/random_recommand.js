import { places } from './content_object.js';

$('.click').click(function () {
    if ($(this).text() === '랜덤추천') {
        const rand = Math.floor(Math.random() * 52);
        const contentName = places[Object.keys(places)[rand]].name;
        localStorage.setItem('name', contentName);
        localStorage.setItem('page', 'random_recommand');
        window.location.href = '../html/show_content.html';
    } else if ($(this).text() === '지역별 랜덤추천') {
        localStorage.setItem('random', $(this).text());
        window.location.href = '../html/pop_up.html';
    } else if ($(this).text() === '키워드별 랜덤추천') {
        localStorage.setItem('random', $(this).text());
        window.location.href = '../html/pop_up.html';
    }
});
$(window).bind('pageshow', function () {
    localStorage.setItem('page', 'random_recommand');
});
