$(document).ready(function () {
    var currentIndex = 0;
    var slides = $('.main-slide');
    var slideCount = slides.length;

    function slideShow() {
        slides.eq(currentIndex).removeClass('active');
        currentIndex = (currentIndex + 1) % slideCount;
        slides.eq(currentIndex).addClass('active');
    }

    setInterval(slideShow, 3000); // 3초마다 슬라이드가 변경
});

// 함께 떠나는 힐링 테마여행 버튼//
let groupIndex = 0;
let groups = document.getElementsByClassName('theme-slide-group');

// 슬라이드 그룹 초기화
for (let i = 0; i < groups.length; i++) {
    groups[i].style.display = 'flex';
    groups[i].overflowX = 'scroll';
}
groups[groupIndex].style.display = 'none'; // 첫 그룹은 보이지 않게 설정

// 다음 버튼 클릭 이벤트
document.getElementById('next').addEventListener('click', function () {
    groups[groupIndex].style.display = 'none'; // 현재 그룹을 보이지 않게 설정
    groupIndex++;
    if (groupIndex >= groups.length) {
        groupIndex = 0;
    }
    groups[groupIndex].style.display = 'flex'; // 다음 그룹을 보이게 설정
});
