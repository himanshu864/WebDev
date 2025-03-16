const { instrument } = require("@socket.io/admin-ui");
const io = require("socket.io")(3000, {
  cors: {
    origin: ["http://localhost:8080", "https://admin.socket.io"],
    credentials: true,
  },
});

const user = {}; // map[socket.id] = name

io.on("connection", (socket) => {
  socket.on("new-user", (name) => {
    user[socket.id] = name;
    socket.broadcast.emit("user-connect", name);
  });

  socket.on("new-message", (msg, room) => {
    if (!room) socket.broadcast.emit("chat-message", user[socket.id], msg);
    else socket.to(room).emit("room-message", user[socket.id], room, msg);
  });

  socket.on("join-room", async (room, cb) => {
    // limit room size to 2
    const sockets = await io.in(room).fetchSockets();
    if (sockets.length == 2) return;

    socket.join(room);
    cb(`You joined a Room with ID : ${room}`);
    socket.to(room).emit("room-message", user[socket.id], room, "Joined");
  });

  socket.on("leave-room", (room, cb) => {
    socket.leave(room);
    cb(`You left Room with ID : ${room}`);
    socket.to(room).emit("room-message", user[socket.id], room, "Left");
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("user-disconnect", user[socket.id]);
    delete user[socket.id];
  });
});

instrument(io, { auth: false });
