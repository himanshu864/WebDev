require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

// Connect Database
const uri = process.env.MONGODB_URI;
const connectMongoDB = require("./config/connect.js");
connectMongoDB(uri);

const { restrictUnauthenticated } = require("./middlewares/unauth.js");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());

const staticRouter = require("./routes/static.js");
const postRoutes = require("./routes/post.js");
const userRouter = require("./routes/user.js");

app.use("/user", userRouter); // User Authentication
app.use("/post", restrictUnauthenticated, postRoutes);
app.use("/", staticRouter);

// Global Error Handler
app.use((err, req, res, next) => res.status(500).json({ error: err.message }));

app.listen(process.env.PORT);
