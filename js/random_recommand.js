import { places } from './content_object.js';

$('.click').click(function () {
    console.log('randomRecommand');
    const rand = Math.floor(Math.random() * 52);
    console.log(rand);
    const contentName = places[Object.keys(places)[rand]].name;
    localStorage.setItem('name', contentName);
    window.location.href = '../html/show_content.html';
});

function mapRecommand() {
    console.log('mapRecommand');
    // const contentName = $(this).children('div:last').children('.content-preview-header').text();
    //localStorage.setItem('name', contentName);
    //window.location.href = '../html/show_content.html';
}
function keywordRecommand() {
    console.log('keywordRecommand');
    // const contentName = $(this).children('div:last').children('.content-preview-header').text();
    // localStorage.setItem('name', contentName);
    // window.location.href = '../html/show_content.html';
}
