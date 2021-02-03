//작성 내용 유효성 검사
function isVaildContents(contents) {
    if (contents == '') {
        alert('내용을 입력해주세요');
        return false;
    }
    if (contents.trim().length > 140) {
        alert('140자 이하로 작성해주세요.');
        return false;
    }
    return true;
}

// length길이의 익명의 아이디를 생성
function genRandomName(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        let number = Math.random() * charactersLength;
        let index = Math.floor(number);
        result += characters.charAt(index);
    }
    return result;
}

//수정버튼 클릭시 기존 작성내용을 수정텍스트상자에 전달
function editPost(id) {
    showEdits(id);
    let contents = $(`#${id}-contents`).text().trim();
    $(`#${id}-textarea`).val(contents)
}

function showEdits(id) {
    $(`#${id}-editarea`).show();
    $(`#${id}-submit`).show();
    $(`#${id}-delete`).show();

    $(`#${id}-contents`).hide();
    $(`#${id}-edit`).hide();
}

////////////////////////////////////////////////////
$(document).ready(function () {
    getMessages();
})

//메세지를 불러옴
function getMessages() {
    $('#cards-box').empty();
    $.ajax({
        type: 'GET',
        url: '/api/memos',
        success: function (response) {
            for (let i = 0; i < response.length; i++) {
                let memo = response[i]
                addHtml(memo['id'], memo['username'], memo['contents'], memo['modifiedAt'])
            }
        }
    })
}

function addHtml(id, username, contents, modifiedAt) {
    let tempHtml = `<div class="card">
                    <!-- date/username 영역 -->
                    <div class="metadata">
                        <div class="date">
                            ${modifiedAt}
                        </div>
                        <div id="${id}-username" class="username">
                            ${username}
                        </div>
                    </div>
                    <!-- contents 조회/수정 영역-->
                    <div class="contents">
                        <div id="${id}-contents" class="text">
                            ${contents}
                        </div>
                        <div id="${id}-editarea" class="edit">
                            <textarea id="${id}-textarea" class="te-edit" name="" id="" cols="30" rows="5"></textarea>
                        </div>
                    </div>
                    <!-- 버튼 영역-->
                    <div class="footer">
                        <img id="${id}-edit" onclick="editPost('${id}')" class="icon-start-edit" src="images/edit.png" alt="">
                        <img id="${id}-delete" onclick="deleteOne('${id}')" class="icon-delete" src="images/delete.png" alt="">
                        <img id="${id}-submit" onclick="submitEdit('${id}')" class="icon-end-edit" src="images/done.png" alt="">
                    </div>
                </div>`
    $('#cards-box').append(tempHtml)
}

//메세지 작성
function writePost() {
    let contents = $('#contents').val();
    if (isVaildContents(contents) == false) {
        return;
    }
    let username = genRandomName(10);
    let data = {'username': username, 'contents': contents}

    $.ajax({
        type:'POST',
        url: '/api/memos',
        contentType:'application/json',
        data: JSON.stringify(data),
        success: function (response){
            alert('메모가 성공적으로 작성되었습니다.')
            window.location.reload();
        }
    })
}

//메세지 수정
function submitEdit(id) {
    let username = $(`#${id}-username`).text().trim();
    let contents = $(`#${id}-textarea`).val().trim();
    if (isVaildContents(contents)==false){
        return;
    }
    let data = {'username': username, 'contents': contents}
    $.ajax({
        type:'PUT',
        url: `/api/memos/${id}`,
        contentType:'application/json',
        data: JSON.stringify(data),
        success: function (response){
            alert('메모가 성공적으로 수정 되었습니다.')
            window.location.reload();
        }
    })
}

//메세서지 삭제
function deleteOne(id) {
    $.ajax({
        type:'DELETE',
        url: `/api/memos/${id}`,
        success: function (response){
            alert('메모가 성공적으로 삭제 되었습니다.')
            window.location.reload();
        }
    })
}