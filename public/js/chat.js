const socket = io();

socket.on("message", (msg) => {
    console.log(msg);
});

const msgBox = document.getElementById("msgValue");

// socket.emit("send-message", )
document.getElementById("message-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const msgValue = msgBox.value;
    msgBox.focus();
    document.getElementById("msgValue").value = "";
    socket.emit("send-message", msgValue);
});

