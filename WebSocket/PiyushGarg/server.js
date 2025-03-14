const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server);

const users = {}; // shared map[socketID] -> name

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

io.on("connection", (socket) => {
  socket.on("new user", (name) => {
    users[socket.id] = name;
    socket.broadcast.emit("user connected", name); // all expect sender
  });

  socket.on("new message", (msg) => {
    socket.broadcast.emit("chat message", users[socket.id], msg);
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("user disconnect", users[socket.id]);
    delete users[socket.id];
  });
});

server.listen(3000);
