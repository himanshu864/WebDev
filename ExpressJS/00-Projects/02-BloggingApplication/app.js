const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/blogify")
  .then(() => console.log("Mongodb Connected..."));

const userRouter = require("./routers/user");
const staticRouter = require("./routers/static");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRouter);
app.use("/", staticRouter);

// Global error Handler
app.use((err, req, res, next) => res.status(500).json({ error: err.message }));

app.listen(3000);
