const io = require("socket.io")(3000, {
  cors: {
    origin: "http://localhost:8080",
  },
});

io.on("connection", (socket) => {
  console.log("User connected!");

  socket.on("disconnect", () => {
    console.log("User disconnected!");
  });
});
