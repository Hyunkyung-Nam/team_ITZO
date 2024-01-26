//함수를 전역객체에 직접 할당
//html에서 src가 module이므로.
window.goRelation2 = function () {
    let selectElement = document.getElementById('relation2');
    let selectedOption = selectElement.value;

    if (selectedOption) {
        window.open(selectedOption, '_blank');
    }
    console.log(selectedOption);
};
window.goRelation = function () {
    let selectElement = document.getElementById('relation');
    let selectedOption = selectElement.value;

    if (selectedOption) {
        window.open(selectedOption, '_blank');
    }
};

$('.nav')
    .children('div')
    .children()
    .click(function () {
        if ($(this).text() === '홈') {
            localStorage.setItem('page', 'home_recommand');
        } else if ($(this).text() === '테마') {
            localStorage.setItem('page', 'theme_recommand');
        } else if ($(this).text() === '지역별 추천') {
            localStorage.setItem('page', 'map_recommand');
        } else if ($(this).text() === '랜덤추천') {
            localStorage.setItem('page', 'random_recommand');
        }
    });
$('.logo').click(function () {
    localStorage.setItem('page', 'home_recommand');
});
$(document).ready(function () {
    console.log('hello');
    console.log(localStorage.getItem('page'));
    $('.nav').children().removeClass('seledted');
    if (localStorage.getItem('page') === 'map_recommand') {
        $('.nav').children('div:eq(2)').children().addClass('seledted');
    } else if (localStorage.getItem('page') === 'random_recommand') {
        $('.nav').children('div:eq(3)').children().addClass('seledted');
    } else if (localStorage.getItem('page') === 'theme_recommand') {
        $('.nav').children('div:eq(1)').children().addClass('seledted');
    } else if (localStorage.getItem('page') === 'home_recommand') {
        $('.nav').children('div:eq(0)').children().addClass('seledted');
    }
});
