function refreshTag() {
    // 새로고침 누르면 #전체 로 set
    $('#All > button').addClass('btn_all_tag');
    $('li > button.active').removeClass('active').addClass('btn');
}

function goDetail() {
    let urlsite = document.getElementById('btn_refresh');
    let url = urlsite.value;

    if (url) {
        window.open(url, '_blank');
    }
}
function goRelation2() {
    let selectElement = document.getElementById('goRelation2');
    let selectedOption = selectElement.value;

    if (selectedOption) {
        window.open(selectedOption, '_blank');
    }
}
function goRelation() {
    let selectElement = document.getElementById('goRelation');
    let selectedOption = selectElement.value;

    if (selectedOption) {
        window.open(selectedOption, '_blank');
    }
}
// title도 선택됨으로
$('#All > button').click(function () {
    $(this).toggleClass('btn_all_tag');
});
$('.btn').click(function () {
    $(this).toggleClass('active');
});
