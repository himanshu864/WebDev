const express = require("express");
const app = express();

const urlRouter = require("./routers/url.js");
const idRouter = require("./routers/id.js");
const analyticsRouter = require("./routers/analytics.js");
const staticRouter = require("./routers/static.js");
const path = require("path");

const connectMongoDB = require("./config/connect.js");
connectMongoDB("mongodb://127.0.0.1:27017/short-url");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views")); // Customize views path

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/URL", urlRouter); // Generate ShortURL
app.use("/r", idRouter); // RirectURL
app.use("/URL/analytics", analyticsRouter); // View Analytics
app.use("/static", staticRouter); // Server Static File

// global error handler
app.use((err, req, res, next) => res.status(500).json({ error: err.message }));

app.listen(3000);
