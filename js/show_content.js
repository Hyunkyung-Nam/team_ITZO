import { places } from './content_object.js';

let innerWidth = window.innerWidth;
innerWidth <= '768'
    ? $('.detail-explanation-more-btn').removeClass('hidden')
    : $('.detail-explanation-more-btn').addClass('hidden');

window.onresize = function (event) {
    let innerWidth = window.innerWidth;
    innerWidth <= '768'
        ? $('.detail-explanation-more-btn').removeClass('hidden')
        : $('.detail-explanation-more-btn').addClass('hidden');
};

$(document).ready(function () {
    if (localStorage.getItem('name')) {
        let name = localStorage.getItem('name');
        for (let key in places) {
            if (places[key].name === name) {
                $('.title').text(places[key].name);
                $('.title-address').text(places[key].address);
                $('.img-section').children().attr('src', places[key].img);
                $('.detail-explanation').text(places[key].detail);
                $('.homepage').text(places[key].homepage);
                $('.tel').text(places[key].tel);
                $('.address').text(places[key].address);
                $('.op-time').text(places[key].opTime);
                $('.parking').text(places[key].parking);
                $('.price').text(places[key].price);
                $('copyright').text(`이미지 출처 : ${places[key].copyright}`);
            }
        }
    }
});
