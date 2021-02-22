$(document).ready(function () {
    $('#review-table').empty()
    getReviews()
})

function getReviews() {
    $.ajax({
        type:'GET',
        url:'/review',
        data:{},
        success:function (response){
            let reviews = response['reviews']
            for (let i=0; reviews.length; i++){
                let review = reviews[i];
                addHtml(review);
            }
        }
    })
}

function addHtml(review) {
    let tempHtml = `<tr>
                      <td>${review.title}</td>
                      <td>${review.author}</td>
                      <td>${review.review}</td>
                    </tr>`
    $('#review-table').append(tempHtml)
}

function postReviews() {
    let title = $('#book-title').val()
    let author = $('#book-author').val()
    let review = $('#book-review').val()

    if (title == '') {
        alert('제목을 적어주세요!');
        $('#book-title').focus();
        return;
    }
    if (author == '') {
        alert('저자를 적어주세요!');
        $('#book-author').focus();
        return;
    }
    if (review == '') {
        alert('리뷰를 적어주세요!');
        $('#book-review').focus();
        return;
    }
    console.log(title, author, review)
    $.ajax({
        type: 'POST',
        url: '/review',
        data: {title_give: title, author_give: author, review_give: review},
        success: function (response) {
            alert('작성이 완료 되었습니다.');
            window.location.reload();
        }
    })


}