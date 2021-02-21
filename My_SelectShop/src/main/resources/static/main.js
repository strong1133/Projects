let targetId;

$(document).ready(function () {
    // id 가 query 인 녀석 위에서 엔터를 누르면 execSearch() 함수를 실행하라는 뜻입니다.
    $('#query').on('keypress', function (e) {
        if (e.key == 'Enter') {
            execSearch();
        }
    });
    $('#close').on('click', function () {
        $('#container').removeClass('active');
    })

    $('.nav div.nav-see').on('click', function () {
        $('div.nav-see').addClass('active');
        $('div.nav-search').removeClass('active');

        $('#see-area').show();
        $('#search-area').hide();
    })
    $('.nav div.nav-search').on('click', function () {
        $('div.nav-see').removeClass('active');
        $('div.nav-search').addClass('active');

        $('#see-area').hide();
        $('#search-area').show();
    })

    $('#see-area').show();
    $('#search-area').hide();

    showProduct();
    $('#search-result-box').empty();
})

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

function execSearch() {
    let query = $('#query').val();
    if (query == '') {
        $('#query').focus()
        return;
    }

    $.ajax({
        type: 'GET',
        url: `/api/search?query=${query}`,
        success: function (response) {
            for (let i = 0; i < response.length; i++) {
                let itemDto = response[i];
                let tempHtml = addHTML(itemDto);
                $('#search-result-box').append(tempHtml);
            }
        }
    });
}

function addHTML(itemDto) {
    return `<div class="search-itemDto">
                <div class="search-itemDto-left">
                    <img src="${itemDto.image}" alt="">
                </div>
                <div class="search-itemDto-center">
                    <div>${itemDto.title}</div>
                    <div class="price">
                        ${numberWithCommas(itemDto.lprice)}
                        <span class="unit">원</span>
                    </div>
                </div>
                <div class="search-itemDto-right">
                    <img src="images/icon-save.png" alt="" onclick='addProduct(${JSON.stringify(itemDto)})'>
                </div>
            </div>`
}

function addProduct(itemDto) {
    /**
     * modal 뜨게 하는 법: $('#container').addClass('active');
     * data를 ajax로 전달할 때는 두 가지가 매우 중요
     * 1. contentType: "application/json",
     * 2. data: JSON.stringify(itemDto),
     */
    // 1. POST /api/products 에 관심 상품 생성 요청
    $.ajax({
        type: 'POST',
        url: '/api/products',
        contentType: 'application/json',
        data: JSON.stringify(itemDto),
        success: function (response) {
            $('#container').addClass('active');
            targetId = response.id;
        }
    })
    // 2. 응답 함수에서 modal을 뜨게 하고, targetId 를 reponse.id 로 설정 (숙제로 myprice 설정하기 위함)
}

function showProduct() {
    $('#product-container').empty();
    $.ajax({
        type: 'GET',
        url: 'api/products',
        success: function (response) {
            for (let i = 0; i < response.length; i++) {
                let product = response[i];
                let tempHtml = addProductItem(product);

                $('#search-result-box').empty();
                $('#product-container').append(tempHtml);
            }
        }
    })
}

function addProductItem(product) {
    // link, image, title, lprice, myprice 변수 활용
    return `<div class="product-card" onclick="window.location.href='${product.link}'">
                <div class="card-header">
                    <img src="${product.image}"
                         alt="">
                </div>
                <div class="card-body">
                    <div class="title">
                        ${product.title}
                    </div>
                    <div class="lprice">
                        <span>${numberWithCommas(product.lprice)}</span>원
                    </div>
                    <div class="isgood ${product.lprice > product.myprice ? 'none' : ''}">
                        최저가
                    </div>
                </div>
            </div>`;
}

function setMyprice() {
    let myprice = $('#myprice').val();
    if (myprice == '') {
        alert('값을 입력해주세요!');
        return;
    }
    $.ajax({
        type: 'PUT',
        url: `/api/products/${targetId}`,
        contentType: 'application/json',
        data: JSON.stringify({myprice: myprice}),
        success:function (response) {
            $('#container').removeClass('active');
            alert('등록 완료')
            window.location.reload();
        }
    })
}
