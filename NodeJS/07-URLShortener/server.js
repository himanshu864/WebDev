const express = require("express");
const app = express();

const connectMongoDB = require("./config/connect.js");
const urlRouter = require("./routers/url.js");
const idRouter = require("./routers/id.js");
const analyticsRouter = require("./routers/analytics.js");

connectMongoDB("mongodb://127.0.0.1:27017/short-url");

app.use(express.json());

app.use("/URL", urlRouter);

app.use("/r", idRouter);

app.use("/URL/analytics", analyticsRouter);

// global error handler
app.use((err, req, res, next) => res.status(500).json({ error: err.message }));

app.listen(3000);
