$(document).ready(function () {
    getStars();
});

function getStars() {
    $.ajax({
        type: 'GET',
        url: '/moviestar',
        data: {},
        success: function (response) {
            $(".card-container").empty();
            let stars = response['stars']
            for (let i = 0; i < stars.length; i++) {
                let star = stars[i]
                addHtml(star)
            }
        }
    })
}

function addHtml(star) {
    let tempHtml = `<div class="card">
                        <div class="card-body">
                          <img
                              src="${star.image}"
                              alt="">
                          <div class="card-body-content">
                            <h2>${star.name}<span>(좋아요: ${star.like} )</span></h2>
                            <p>${star.title}</p>
                          </div>
                        </div>
                        <div class="card-footer">
                          <a href="#" id="like" onclick="like('${star.name}')"> <i class="fas fa-thumbs-up"></i> 위로</a>
                          <a href="#" id="hate" onclick="hate('${star.name}', '${star.like}')"> 싫어요<i class="fas fa-thumbs-down"> </i></a>
                        </div>
                      </div>`;
    $(".card-container").append(tempHtml)
}

function like(name) {
    $.ajax({
        type: 'POST',
        url: '/like',
        data: {name_give: name},
        success: function (response) {
            let msg = response['msg']
            alert(msg)
            window.location.reload();
        }
    })
}

function hate(name, like) {
    if (like <=0) {
        alert('좋아요 수가 0 입니다!');
        window.location.reload();
        return ;
    }
    $.ajax({
        type: 'POST',
        url: '/hate',
        data: {hate_give: name},
        success: function (response) {
            let msg = response['msg']
            alert(msg)
            window.location.reload();
        }
    })
}

