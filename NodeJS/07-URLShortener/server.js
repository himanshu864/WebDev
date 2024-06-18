const express = require("express");
const app = express();

const connectMongoDB = require("./config/connect.js");
const urlRouter = require("./routers/url.js");
const idRouter = require("./routers/id.js");

connectMongoDB("mongodb://127.0.0.1:27017/short-url");

app.use(express.json());

app.use("/URL", urlRouter);

// app.use("/", idRouter);

// app.use((err, req, res, next) => res.status(500).json({ error: err }));

app.get("/:id", (req, res) => {
  const sid = req.params.id;
  return res.json({ id: sid });
});

app.listen(3000);
