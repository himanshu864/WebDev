require("dotenv").config();
const express = require("express");
const app = express();

const connectMongoDB = require("./utils/connectionDB");
connectMongoDB(process.env.MONGODB_URI);

const userRouter = require("./routers/user");
const staticRouter = require("./routers/static");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRouter);
app.use("/", staticRouter);

// Global error Handler
app.use((err, req, res, next) => res.status(500).json({ error: err.message }));

app.listen(3000);
