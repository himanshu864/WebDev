require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.set("view-engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const staticRouter = require("./routes/static.js");
const postRoutes = require("./routes/post.js");

app.use("/", postRoutes);
app.use("/", staticRouter);

app.listen(3000);
