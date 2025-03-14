const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const PORT = 3000;

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User connected!");

  socket.on("disconnect", () => {
    console.log("User disconnected!");
  });
});

server.listen(PORT, () => {
  console.log(`Successfully started server on Port:${PORT}`);
});
