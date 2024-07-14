require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

const connectMongoDB = require("./utils/connectionDB");
connectMongoDB(process.env.MONGODB_URI);

const userRouter = require("./routers/user");
const staticRouter = require("./routers/static");
const blogRouter = require("./routers/blog");
const { checkAuthentication } = require("./middlewares/checkAuth");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use(cookieParser());

app.use(checkAuthentication("token"));

app.use("/user", userRouter);
app.use("/blog", blogRouter);
app.use("/", staticRouter);

// Global error Handler
app.use((err, req, res, next) => res.status(500).json({ error: err.message }));

app.listen(3000);
