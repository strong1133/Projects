$(document).ready(function () {
    // alert('안녕')
    $('.card-container').empty();
    getMovies();
})

function showclose() {
    let display = $('.post-box').css('display')
    // console.log(display)
    if (display == 'block') {
        $('#header-btn').text('포스팅 박스 열기')
        $('.post-box').hide();
    } else {
        $('#header-btn').text('포스팅 박스 닫기')
        $('.post-box').show();
    }
}

function getMovies() {
    $.ajax({
        type:'GET',
        url:'/movies',
        data:{},
        success: function (response){
            // alert('상공')
            let movies = response['movies']
            for(let i=0; i< movies.length; i++){
                let movie = movies[i]
                addHtml(movie);
            }
        }
    })
}

function addHtml(movie) {
    let tempHtml = `<div class="card">
                      <div class="card-header">
                        <img
                            src="${movie.image}"
                            alt="" class="card-img">
                      </div>
                      <div class="card-body">
                        <div class="card-title">${movie.title}</div>
                        <div class="card-desc">${movie.desc}.</div>
                      </div>
                    </div>`;
    $('.card-container').append(tempHtml);

}