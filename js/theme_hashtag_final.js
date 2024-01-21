// import { places } from './hs.js';

//함수를 전역객체에 직접 할당
window.goRelation2 = function () {
    let selectElement = document.getElementById('relation2');
    let selectedOption = selectElement.value;

    if (selectedOption) {
        window.open(selectedOption, '_blank');
    }
    console.log(selectedOption);
};
window.goRelation = function () {
    let selectElement = document.getElementById('relation');
    let selectedOption = selectElement.value;

    if (selectedOption) {
        window.open(selectedOption, '_blank');
    }
};
//전체를 눌렀을때 다른 태그들의 색을 사라지게 하고, 또다시 개별 해시태그 누르면 전체해시태그 색이 사라지게끔
$('.hashtag').click(function () {
    $(this).toggleClass('active');
    $('#All').removeClass('all_btn_active');
});
$('#All').click(function () {
    $(this).toggleClass('all_btn_active');
    $('.active').removeClass('active');
});
window.refreshTag = function () {
    // 새로고침 누르면 #전체 로 set
    $('#All').addClass('all_btn_active');
    $('button.active').removeClass('active').addClass('');
};

let hashtags = []; // 해시태그를 저장하는 배열

$('.hashtag').click(function () {
    const clickedHashtag = this.dataset.hashtag;
    if (clickedHashtag === '전체') {
        hashtags = ['전체'];
    } else {
        if (hashtags.includes('전체')) {
            const index = hashtags.indexOf('전체');
            hashtags.splice(index, 1); // 눌려있는 '전체' 해시태그를 누르면 취소한다는 의미니까 해제
        }
        if (hashtags.includes(clickedHashtag)) {
            //선택한 해시태그가 그걸 담고있는 배열에 있는지 확인
            const index = hashtags.indexOf(clickedHashtag);
            hashtags.splice(index, 1); // 이미 선택된 해시태그를 배열에서 제거, 선택된 해시태그를 누른다는건 취소한다는 의미이므로.
        } else {
            hashtags.push(clickedHashtag); // 배열에 없는 새로 선택한 해시태그를 배열에 추가
        }
    }
    $('.content-container').removeClass('hide'); //업데이트 다 된후, 해당 클래스에 hide들을 제거해서 모든 컨텐츠가 보이게끔
    setContentContainer(hashtags);
    console.log(hashtags); //배열안에 들어가서 중복되는거 나오게끔 만들어짐.
});

$('.page-numbering').empty();
$('.content-container').removeClass('hide');

function setContentContainer(hashtags) {
    let contentCount = 0;

    if (hashtags === '전체') {
        display.style = 'block';
    }

    for (let key in places) {
        //선택한 모든 해시태그들이 장소에 포함되어 있는지 확인
        if (hashtags.includes('전체') || hashtags.every((hashtag) => places[key].tag.includes(hashtag))) {
            if (contentCount < 6) {
                setContent(key, contentCount);
            }
            contentCount++;
        }
    }

    if (contentCount < 6) {
        for (let i = contentCount; i < 6; i++) {
            hideContent(i);
        }
    }
    const pageNumber = Math.ceil(contentCount / 6); //올림
    for (let i = 1; i <= pageNumber; i++) {
        $('.page-numbering').append(`<button type='button' class='content-container-btn'>[${i}]  </button>`);
        $('.page-numbering')
            .children()
            .css({ color: 'white', 'background-color': 'unset', border: '0', cursor: 'pointer' });
    }
    createButtonEvent();
}

function resetContent(pageNum, hashtags) {
    let totalContentCount = 0; // 0
    let showItemCount = 0;
    let itemNum = (pageNum - 1) * 6; //6
    for (let key in places) {
        //여러 개의 해시태그 중 하나라도 해당하는 장소를 필터링
        if (hashtags.some((hashtag) => places[key].tag.includes(hashtag))) {
            if (totalContentCount >= itemNum && showItemCount < 6) {
                setContent(key, showItemCount);
                showItemCount++;
            }
            totalContentCount++;
        }
    }
    if (showItemCount < 6) {
        for (let i = showItemCount; i < 7; i++) {
            hideContent(i);
        }
    }
}

function setContent(key, contentCount) {
    let childCount = `eq(${contentCount})`;
    $('.content-img-section').children(`img:${childCount}`).attr('src', places[key].img);
    $('.content-img-section').children(`img:${childCount}`).attr('style', 'height:140px');
    $(`.content-preview-header:${childCount}`).text(places[key].name);
    $(`.content-preview-address:${childCount}`).text(places[key].address);
    const tagString = setTag(places[key].tag);
    $(`.content-preview-tag:${childCount}`).text(tagString);
}
function hideContent(contentCount) {
    let childCount = `eq(${contentCount})`;
    $(`.content-container:${childCount}`).addClass('hide');
}
function setTag(tags) {
    let tagString = '';
    for (let tag of tags) {
        tagString += `#${tag} `;
    }
    return tagString;
}
function createButtonEvent() {
    $('.content-container-btn').on('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' }); //최상단으로 스크롤 옮기기
        $('.content-container').removeClass('hide');
        let number = $(this).text().replace('[', '');
        number = Number(number.replace(']', ''));
        resetContent(number);
    });
}
