// 상세정보 페이지
import { places } from './content_object.js';

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
    setInterval(slideShow, 1000); // 3000 = 3초마다 슬라이드가 변경
});

// 함께 떠나는 힐링 테마여행 버튼
document.addEventListener('DOMContentLoaded', (event) => {
    let currentSlideGroup = 0;
    let slideGroups = document.getElementsByClassName('theme-slide-group');

    // 모든 그룹을 보이지 않게 설정
    for (let i = 0; i < slideGroups.length; i++) {
        slideGroups[i].style.display = 'none';
    }

    // 첫 번째 그룹만 보이게 설정
    slideGroups[currentSlideGroup].style.display = 'flex';

    window.changeSlide = function (direction) {
        // 현재 그룹을 보이지 않게 설정
        slideGroups[currentSlideGroup].style.display = 'none';

        if (direction === 'next') {
            currentSlideGroup++;
            if (currentSlideGroup >= slideGroups.length) {
                currentSlideGroup = 0;
            }
        } else if (direction === 'prev') {
            currentSlideGroup--;
            if (currentSlideGroup < 0) {
                currentSlideGroup = slideGroups.length - 1;
            }
        }

        // 다음 그룹을 보이게 설정
        slideGroups[currentSlideGroup].style.display = 'flex';
    };
});
let startX; // 터치가 시작된 x좌표
let endX; // 터치가 끝난 x좌표
let slideWrapper = document.querySelector('.theme-wrap'); // 슬라이드가 담긴 wrapper 선택

slideWrapper.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX; // 터치가 시작된 x좌표 저장
});

slideWrapper.addEventListener('touchmove', function (e) {
    endX = e.changedTouches[0].clientX; // 터치가 이동한 x좌표 저장
});

slideWrapper.addEventListener('touchend', function () {
    // 터치의 방향에 따라 이전 슬라이드 또는 다음 슬라이드 보여주기
    if (startX - endX > 30) {
        // 오른쪽으로 드래그 한 경우
        showNextSlideGroup();
    } else if (startX - endX < -30) {
        // 왼쪽으로 드래그 한 경우
        showPrevSlideGroup();
    }
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
