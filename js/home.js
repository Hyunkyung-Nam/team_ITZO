// 상세정보 페이지
// import { places } from './content_object.js';

// 메인슬라이드
$(document).ready(function () {
    let currentIndex = 0;
    let imageSlides = $('.main-slide');
    let textSlides = $('.main-text'); // 텍스트 슬라이드를 위한 jQuery 객체
    let slideCount = imageSlides.length;

    imageSlides.eq(0).addClass('active');
    textSlides.eq(0).addClass('active'); // 첫 번째 이미지 슬라이드와 텍스트 슬라이드 활성화

    function slideShow() {
        imageSlides.eq(currentIndex).removeClass('active');
        textSlides.eq(currentIndex).removeClass('active'); // 현재 이미지와 텍스트 슬라이드 비활성화
        currentIndex = (currentIndex + 1) % slideCount;
        imageSlides.eq(currentIndex).addClass('active');
        textSlides.eq(currentIndex).addClass('active'); // 다음 이미지와 텍스트 슬라이드 활성화
    }
    setInterval(slideShow, 3000); // 3000 = 3초마다 슬라이드가 변경
});

// 함께 떠나는 힐링 테마여행 버튼
let groupIndex = 0;
let groups = document.getElementsByClassName('theme-slide-group');

// 슬라이드 그룹 초기화
for (let i = 0; i < groups.length; i++) {
    groups[i].style.display = 'none'; // 모든 그룹을 보이지 않게 설정
}
groups[groupIndex].style.display = 'flex'; // 첫 그룹만 보이게 설정

// 다음 버튼 클릭 이벤트
document.getElementById('next').addEventListener('click', function () {
    groups[groupIndex].style.display = 'none'; // 현재 그룹을 보이지 않게 설정
    groupIndex++;
    if (groupIndex >= groups.length) {
        groupIndex = 0;
    }
    groups[groupIndex].style.display = 'flex'; // 다음 그룹을 보이게 설정
});

// 이전 버튼 클릭 이벤트
document.getElementById('prev').addEventListener('click', function () {
    groups[groupIndex].style.display = 'none'; // 현재 그룹을 보이지 않게 설정
    groupIndex--;
    if (groupIndex < 0) {
        groupIndex = groups.length - 1;
    }
    groups[groupIndex].style.display = 'flex'; // 이전 그룹을 보이게 설정
});

$('.page-move').click(function () {
    const contentName = $('.active').children('p').text();
    console.log(contentName);
    localStorage.setItem('name', contentName);
    window.location.href = '../html/show_content.html';
});
$('.theme-slide').click(function () {
    const contentName = $(this).find('img').attr('alt');
    console.log(contentName);
    localStorage.setItem('name', contentName);
    window.location.href = '../html/show_content.html';
});
