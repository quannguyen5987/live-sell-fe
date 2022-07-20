
const submitBtn = document.querySelector('.submit');
const chatArea = document.querySelector('.chat-area');
const inputElm = document.querySelector('input');
const emojiBtn = document.querySelector('#emoji-btn');
const picker = new EmojiButton();


// Emoji selection  
window.addEventListener('DOMContentLoaded', () => {

    picker.on('emoji', emoji => {
        document.querySelector('input').value += emoji;
    });

    emojiBtn.addEventListener('click', () => {
        picker.togglePicker(emojiBtn);
    });
});


// send msg 
submitBtn.addEventListener('click', () => {
    let userInput = inputElm.value;

    let temp = `<div class="row row-chat">

    <div class="col-1">
        <img id="kkk" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
            alt="avatar" width="24" height="24" />
    </div>

    <div class="col-10 comment" style="padding:0px">
        <span class="comment1">
            Maria Smantha
        </span>
        <span class="comment2">
            ${userInput}
        </span>
    </div>

</div>`;

    chatArea.insertAdjacentHTML("beforeend", temp);
    inputElm.value = '';

    var myDiv = document.getElementById("chatkk");
    myDiv.scrollTop = myDiv.scrollHeight;

})