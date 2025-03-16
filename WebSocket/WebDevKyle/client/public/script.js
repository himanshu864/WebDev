import { io } from "/socket.io-client/socket.io.esm.min.js";
const socket = io("http://localhost:3000");

const messagesList = document.getElementById("messages-list");
const messageForm = document.getElementById("message-form");
const roomForm = document.getElementById("room-form");
const messageInput = document.getElementById("message-input");
const privateRoomInput = document.getElementById("private-room");
const roomInput = document.getElementById("room-input");
const roomLeaveButton = document.getElementById("room-leave-button");

const appendMessage = (msg) => {
  const item = document.createElement("li");
  item.textContent = msg;
  messagesList.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
};

// On connection
const username = prompt("");
socket.on("connect", () => {
  appendMessage(`You connected! Socket ID: ${socket.id}`);
  socket.emit("new-user", username);
});

// On Message
messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = messageInput.value;
  const privateRoom = privateRoomInput.value;
  if (!message) return;

  socket.emit("new-message", message, privateRoom);
  appendMessage(`You: ${message}`);
  messageInput.value = "";
  messageInput.focus();
});

// On Room Join
roomForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const room = roomInput.value;
  if (!room) return;

  socket.emit("join-room", room, (msg) => appendMessage(msg));
  roomInput.value = "";
});

// On Room Leave
roomLeaveButton.addEventListener("click", (event) => {
  const room = roomInput.value;
  if (!room) return;

  socket.emit("leave-room", room, (msg) => appendMessage(msg));
  roomInput.value = "";
});

// Listeners
socket.on("user-connect", (name) => {
  appendMessage(`${name} connected!`);
});

socket.on("chat-message", (name, msg) => {
  appendMessage(`${name}: ${msg}`);
});

socket.on("room-message", (name, room, msg) => {
  appendMessage(`${name}(${room}): ${msg}`);
});

socket.on("user-disconnect", (name) => {
  appendMessage(`${name} disconnected!`);
});
