const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

app.use(
  "/socket.io-client",
  express.static(
    path.join(__dirname, "node_modules", "socket.io-client", "dist")
  )
);

app.listen(8080);
