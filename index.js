function sendComment() {
    const userName = document.getElementById('userName').value;
    const userNameNew = userName.replace(/[А-Я]/g, u => u.toLowerCase());
    const userNameNew2 = userNameNew.replace(/(^|\s)\S/g, a => a.toUpperCase());

    const userLink = document.getElementById('userLink').value;

    const userComment = document.getElementById('userComment').value;
    const userCommentNew = userComment.replace(/viagra/ig, "xxx")

    document.querySelector('.chat__user-image').src = userLink;
    document.querySelector('.chat__user-name').innerHTML = userNameNew2;
    document.querySelector('.chat__message').innerHTML = userCommentNew;

}

document.querySelector('.button').onclick = sendComment;