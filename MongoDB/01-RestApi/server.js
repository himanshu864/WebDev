const express = require("express");
const app = express();

// Connect
const { connectMongoDB } = require("./connection");
connectMongoDB("mongodb://127.0.0.1:27017/restUsers");

// Import Models
const User = require("./models/user");

// Import routers
const userRouter = require("./routes/users");
const apiRouter = require("./routes/api");

// Import Middlewares
const checkConnection = require("./middlewares/checkConnection");

app.use(express.urlencoded({ extended: false }));

app.use(checkConnection);

app.use("/users", userRouter);

app.use("/api/users", apiRouter);

app.listen(3000);
