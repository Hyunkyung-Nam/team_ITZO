function goRelation2() {
    let selectElement = document.getElementById('relation2');
    let selectedOption = selectElement.value;

    if (selectedOption) {
        window.open(selectedOption, '_blank');
        console.log(selectedOption);
    }
}
function goRelation() {
    let selectElement = document.getElementById('relation');
    let selectedOption = selectElement.value;

    if (selectedOption) {
        window.open(selectedOption, '_blank');
    }
}
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
