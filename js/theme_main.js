$(window).bind('pageshow', function () {
    localStorage.setItem('page', 'theme_recommand');
    console.log(localStorage.getItem('page'));
});

$('img').hover(function () {
    $(this).toggleClass('zoom_img');
});
// $('.text').hover(function () {
//     $(this).toggleClass('zoom_text');
// });
// $('.text_list').hover(function () {
//     $(this).toggleClass('zoom_text');
// });
