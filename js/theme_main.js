function goRelation2() {
    let selectElement = document.getElementById('relation2');
    let selectedOption = selectElement.value;

    if (selectedOption) {
        window.open(selectedOption, '_blank');
    }
}
function goRelation() {
    let selectElement = document.getElementById('relation');
    let selectedOption = selectElement.value;

    if (selectedOption) {
        window.open(selectedOption, '_blank');
    }
}

$('img').hover(function () {
    $(this).toggleClass('zoom_img');
});
$('.text').hover(function () {
    $(this).toggleClass('zoom_text');
});
