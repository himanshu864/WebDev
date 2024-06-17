const express = require("express");
const app = express();

// Globally Handle Errors
// Handles User Model not connected
// Handler all errors that could occur during await operations
// Example Invalid Inputs while updating
const errorHandler = require("./middlewares/errorHandling");

// Connect
const { connectMongoDB } = require("./config/connection");
connectMongoDB("mongodb://127.0.0.1:27017/restUsers");

// Import routers
const userRouter = require("./routes/users");
const apiRouter = require("./routes/api");

// Import Middlewares
app.use(express.urlencoded({ extended: false }));

app.use("/users", userRouter);
app.use("/api/users", apiRouter);

app.use(errorHandler);

app.listen(3000);
