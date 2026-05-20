// const enterBtn = document.getElementById('enter-btn');
// const nicknameInput = document.getElementById('nickname-input');
// const welcomeScreen = document.getElementById('welcome-screen');
// const chatScreen = document.getElementById('chat-screen');
// const welcomeMessage = document.getElementById('welcome-message');

// let myNickname = "";

// enterBtn.addEventListener('click', function(){
//     myNickname = nicknameInput.value.trim();

//     if (myNickname !== ""){
//         welcomeScreen.style.display = 'none';

//         chatScreen.style.display = 'block';

//         welcomeMessage.innerText = `Logged in as: ${myNickname}`;

//     } else {
//         alert("Put a nickname twin.");
//     }
// })

// const messageInput = document.getElementById('message-input');
// const sendBtn = document.getElementById('send-btn');
// const messagesDiv = document.getElementById('messages');

// function sendMessage() {
//     let msgText = messageInput.value.trim();

//     if (msgText !== "") {
//         let newMsg = document.createElement('p');

//         newMsg.innerText = `${myNickname}: ${msgText}`;

//         messagesDiv.appendChild(newMsg);
//         messageInput.value = "";
//     }
// }

// sendBtn,addEventListener('click', sendMessage);

// messageInput.addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         sendMessage();
//     }
// });

// nicknameInput.addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         myNickname = nicknameInput.value.trim();

//     if (myNickname !== ""){
//         welcomeScreen.style.display = 'none';

//         chatScreen.style.display = 'block';

//         welcomeMessage.innerText = `Logged in as: ${myNickname}`;

//     } else {
//         alert("Put a nickname twin.");
//     }
//     }
// });






import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";


const firebaseConfig = {

  apiKey: "AIzaSyAtRyclhX_jHZMkx9ncPegmhQngWJWv1HU",

  authDomain: "kol-chat-c475d.firebaseapp.com",

  databaseURL: "https://kol-chat-c475d-default-rtdb.firebaseio.com",

  projectId: "kol-chat-c475d",

  storageBucket: "kol-chat-c475d.firebasestorage.app",

  messagingSenderId: "301935717874",

  appId: "1:301935717874:web:593e8c40f5ee74d1a6cf6b"

};



const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const chatRoomRef = ref(db, "chat-messages"); // This is the "folder" in your database


const enterBtn = document.getElementById('enter-btn');
const nicknameInput = document.getElementById('nickname-input');
const welcomeScreen = document.getElementById('welcome-screen');
const chatScreen = document.getElementById('chat-screen');
const welcomeMessage = document.getElementById('welcome-message');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const messagesDiv = document.getElementById('messages');

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
});

nicknameInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        myNickname = nicknameInput.value.trim();
    if (myNickname !== ""){
        welcomeScreen.style.display = 'none';
        chatScreen.style.display = 'block';
        welcomeMessage.innerText = `Logged in as: ${myNickname}`;
    } else {
        alert("Put a nickname twin.");
    }
    }
});

function sendMessage() {
    let msgText = messageInput.value.trim();
    
    if (msgText !== "") {
        
        push(chatRoomRef, {
            name: myNickname,
            text: msgText
        });
        
        
        messageInput.value = "";
    }
}

sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});


onChildAdded(chatRoomRef, (snapshot) => {
    const data = snapshot.val();
    
    
    let newMsg = document.createElement('p');
    newMsg.innerText = `${data.name}: ${data.text}`;
    
    
    messagesDiv.appendChild(newMsg);
    
    
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
});