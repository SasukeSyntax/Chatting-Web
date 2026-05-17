const enterBtn = document.getElementById('enter-btn');
const nicknameInput = document.getElementById('nickname-input');
const welcomeScreen = document.getElementById('welcome-screen');
const chatScreen = document.getElementById('chat-screen');
const welcomeMessage = document.getElementById('welcome-message');

let myNickname = "";

enterBtn.addEventListener('click', function(){
    myNickname = nicknameInput.value.trim();

    if (myNickname !== ""){
        welcomeScreen.style.display = 'none';

        chatScreen.style.display = 'block';

        welcomeMessage.innerText = `Logged in as: ${myNickname}`;

    } else {
        alert("Put a nickname twin.");
    }
})

const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const messagesDiv = document.getElementById('messages');

function sendMessage() {
    let msgText = messageInput.value.trim();

    if (msgText !== "") {
        let newMsg = document.createElement('p');

        newMsg.innerText = `${myNickname}: ${msgText}`;

        messagesDiv.appendChild(newMsg);
        messageInput.value = "";
    }
}

sendBtn,addEventListener('click', sendMessage);

messageInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});