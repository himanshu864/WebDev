const socket = io();

const form = document.getElementById("form");
const input = document.getElementById("input");
const messages = document.getElementById("messages");

const appendMessage = (text) => {
  const item = document.createElement("li");
  item.textContent = text;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
};

// when client joins
const userName = prompt("What's your name?");
appendMessage("You joined");
socket.emit("new user", userName);

// when client sends a message
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    appendMessage(`You: ${input.value}`);

    socket.emit("new message", input.value);
    input.value = "";
    input.focus();
  }
});

// whenever someone joins
socket.on("user connected", (name) => {
  appendMessage(`${name} connected`);
});

// when someone messages
socket.on("chat message", (name, msg) => {
  appendMessage(`${name}: ${msg}`);
});

// when someone disconnects
socket.on("user disconnect", (name) => {
  appendMessage(`${name} disconnected`);
});
