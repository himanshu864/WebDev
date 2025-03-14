const socket = io("http://localhost:3000");

const messagesList = document.getElementById("messages-list");
const messageForm = document.getElementById("message-form");
const roomForm = document.getElementById("room-form");
const messageInput = document.getElementById("message-input");
const roomInput = document.getElementById("room-input");

const appendMessage = (msg) => {
  const item = document.createElement("li");
  item.textContent = msg;
  messagesList.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
};

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!messageInput) return;

  appendMessage(`You: ${messageInput.value}`);
  messageInput.value = "";
  messageInput.focus();
});

roomForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const room = roomInput.value;
  if (!room) return;

  roomInput.value = "";
  roomInput.focus();
});
