// 장소와 해시태그를 객체로 관리
const placesInfo = {
    경복궁: ['문화재', '자연', '고궁'],
    창덕궁: ['고궁', '문화재', '서울', '자연'],
    창경궁: ['자연', '문화재', '가족과 함께', '고궁'],
    덕수궁: ['문화재', '고궁', '이색체험'],
    경희궁: ['서울', '고궁', '당일치기'],
    운현궁: ['가족과 함께', '역사유적지', '이색체험'],
};

// 모든 해시태그 버튼을 선택
const buttons = document.querySelectorAll('.hashtag');
// 모든 장소를 선택
const places = document.querySelectorAll('.place');

// 각 버튼에 클릭 이벤트 리스너를 추가
buttons.forEach((button) => {
    button.addEventListener('click', function () {
        // 현재 버튼의 데이터 해시태그 값을 가져옴
        const hashtag = this.dataset.hashtag;

        if (hashtag === '전체') {
            places.forEach((place) => {
                place.style.display = 'block';
            });
        } else {
            places.forEach((place) => {
                // 장소 이름을 가져옴
                const placeName = place.textContent.trim();
                // 선택된 해시태그가 장소의 해시태그 배열에 포함되어 있는지 확인
                if (placesInfo[placeName].includes(hashtag)) {
                    place.style.display = 'block'; //있으면 inline형식으로 받아오기
                } else {
                    place.style.display = 'none'; //선택되지 않은 해시태그의 장소는 숨김처리
                }
            });
        }
    });
});

function refreshBtn() {
    $('#hashtag-buttons > .All').addClass('btn_all_tag');
    $('#hashtag-buttons > button.active').removeClass('active').addClass('btn');
}
$('#All > button').click(function () {
    $(this).toggleClass('btn_all_tag');
});
$('.btn').click(function () {
    $(this).toggleClass('active');
});
