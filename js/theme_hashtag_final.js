import { places } from './content_object.js';

//아무것도 실행되지 않았을때 맨 처음 로드페이지 화면
$(document).ready(function () {
    $('#All').click();
});
// 페이지가 로드되면 '#전체'에 해당하는 모든 장소를 표시(567px미만 일때)
$(document).ready(function () {
    setContentContainer(['전체']);
});

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
    $('#All').trigger('click');
};

let hashtags = []; // 해시태그를 저장하는 배열

$('.hashtag').click(function () {
    let innerWidth = window.innerWidth;
    const clickedHashtag = this.dataset.hashtag;
    if (innerWidth <= '567') {
        //567이하일때 이벤트
        modalSelect(clickedHashtag);
    } else {
        //567초과일때 이벤트
        directSelect(clickedHashtag);
    }
});
function directSelect(clickedHashtag) {
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
}

let tempHashtags = []; // 임시 해시태그 배열

function modalSelect(clickedHashtag) {
    // console.log('Clicked hashtag: ', clickedHashtag);
    if (clickedHashtag === '전체') {
        tempHashtags = ['전체'];
    } else {
        const index = tempHashtags.indexOf('전체');
        if (index > -1) {
            // '전체' 해시태그가 tempHashtags 배열에 존재하는 경우에 ,
            tempHashtags.splice(index, 1); //배열에서 '전체' 해시태그를 제거
        }
        if (tempHashtags.includes(clickedHashtag)) {
            //클릭한 해시태그가 배열에 있는지 확인(includes는 T/F로 나오니까 포함되어 있으면 1이고, 아니면 -1)
            const index = tempHashtags.indexOf(clickedHashtag);
            tempHashtags.splice(index, 1); // 이미 tempHashtags 배열에 있는 경우 해당 해시태그를 제거하고, 그렇지 않은 경우 해당 해시태그를 배열에 추가
        } else {
            tempHashtags.push(clickedHashtag);
        }
    }

    // console.log('Temp hashtags: ', tempHashtags);

    // 확인 버튼 클릭 이벤트
    $('.confirm')
        .off('click')
        .on('click', function () {
            // '전체' 해시태그가 선택되지 않았을 때 다른 해시태그들을 hashtags 배열에 추가
            if (tempHashtags.includes('전체')) {
                hashtags = ['전체'];
            } else {
                hashtags = [...tempHashtags];
            }

            $('.content-container').removeClass('hide');
            setContentContainer(hashtags);

            // console.log('Hashtags: ', hashtags);
            document.querySelector('.modal').style.display = 'none'; // 모달 닫기
        });

    //취소버튼 클릭 이벤트
    $('.cancel')
        .off('click')
        .on('click', function () {
            $('button.active').removeClass('active').addClass('');
            document.querySelector('.modal').style.display = 'none';
        });
    //해시태그 선택 버튼을 누르면 active가 사라지게끔
    // $('.hashtag-btn-open-modal').on('click', function () {
    //     $('button.active').removeClass('active').addClass('');
    //     hashtags = [];
    //     tempHashtags = [];
    // });
}

$('.btn_refresh').click(function () {
    refreshTag();
});

function setContentContainer(hashtags) {
    $('.page-numbering').empty();
    $('.content-container').removeClass('hide');
    let contentCount = 0;

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
        $('.page-numbering').children().css({
            color: 'black',
            'background-color': '#f8f9fa',
            border: 'solid #f8f9fa',
            'border-radius': '0',
            cursor: 'pointer',
            padding: '3px',
            margin: '2px',
        });
    }
    //첫번째 페이지는 항상 기본값으로 클릭되어있게 세팅
    $('.content-container-btn:first').addClass('active').css({
        color: 'black',
        'background-color': '#f5f56d',
        border: 'solid #f5f56d',
        'border-radius': '0',
        cursor: 'pointer',
        padding: '3px',
        margin: '2px',
    });
    $('.content-container-btn:first').trigger('click');

    createButtonEvent();
    console.log(contentCount);
}

function resetContent(pageNum, hashtags) {
    let totalContentCount = 0; // 0
    let showItemCount = 0;
    let itemNum = (pageNum - 1) * 6; //6
    for (let key in places) {
        //여러 개의 해시태그 중 하나라도 해당하는 장소를 필터링
        if (hashtags.includes('전체') || hashtags.every((hashtag) => places[key].tag.includes(hashtag))) {
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
    $('.content-img-section').children(`img:${childCount}`).attr('style');
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

        resetContent(number, hashtags);

        $('.content-container-btn.active').removeClass('active');
        $(this).addClass('active');
        $('.content-container-btn').css({
            color: 'black',
            'background-color': '#f8f9fa',
            border: 'solid #f8f9fa',
            'border-radius': '0',
            cursor: 'pointer',
            padding: '3px',
            margin: '2px',
        });

        $('.content-container-btn.active').css({
            color: 'black',
            'background-color': '#f5f56d',
            border: 'solid #f5f56d',
            'border-radius': '0',
            cursor: 'pointer',
            padding: '3px',
            margin: '2px',
        });
    });
}

$('.content-container').click(function () {
    const contentName = $(this).children('div:last').children('.content-preview-header').text();
    localStorage.setItem('name', contentName);
    window.location.href = '../html/show_content.html';
});

$('.content-container').click(function () {
    const contentName = $(this).children('div:last').children('.content-img-section').img();
    localStorage.setItem('img', contentName);
    window.location.href = '../html/show_content.html';
});

//modal
//
const modal = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.hashtag-btn-open-modal');
const btnCloseModal = document.querySelector('.hashtag-btn-close-modal');

btnOpenModal.addEventListener('click', () => {
    modal.style.display = 'flex';
});
btnCloseModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

//해시태그 했을때 해당되는 장소 없습니다...나타나게 하는거

// $('.hashtag').click(function () {
//     let innerWidth = window.innerWidth;
//     const clickedHashtag = this.dataset.hashtag;
//     const messageDiv = document.getElementById('search-result-message');

//     if (clickedHashtag.length === 0) {
//         messageDiv.innerHTML = '해당되는 장소가 없습니다.';
//     } else {
//         messageDiv.innerHTML = '';
//         if (innerWidth <= '567') {
//             //567이하일때 이벤트
//             modalSelect(clickedHashtag);
//         } else {
//             //567초과일때 이벤트
//             directSelect(clickedHashtag);
//         }
//     }
// });
