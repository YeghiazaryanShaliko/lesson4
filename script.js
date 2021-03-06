function main() {
    var socket = io();
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var button2 = document.getElementById('delete');


    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    button.onclick = handleSubmit;
    
    function handleDelete(evt) {
        var del = clear.value;
        if (val != "") {
            socket.emit("delete message", del);
        }
    }
    button2.onclick = handleDelete;

    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }

    socket.on('display message', handleMessage);
    socket.on('delete message', handleDelete);
} 

window.onload = main;