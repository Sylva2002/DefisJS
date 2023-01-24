const button = document.getElementById("button");
const toasts = document.getElementById('toasts');

const message = [
    "Message One",
    "Message Two",
    "Message Three",
    "Message Four",
];

let messageIndex = 0

button.addEventListener("click",()=>createNotification());

function createNotification(){
    const toast = document.createElement("div");
    toast.classList.add("toast");
 
    toast.innerText = getRandomMessage();
    console.log(getRandomMessage())

    toasts.appendChild(toast);
    setTimeout(()=>{toast.remove()}, 3000);
}

function getRandomMessage(){
    return message[Math.floor((Math.random() * message.length))];
}