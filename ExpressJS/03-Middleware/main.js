const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const birds = require('./router/birds')

// Router level Middleware
app.use('/birds', birds)

// Application-level
// Middleware 1 - returns information about request
app.use((req, res, next) => {
    console.log(`Request type ${req.method} Accepted!`);
    req.himanshu = "he is a sudo user.";
    next();
})

// Middleware 2 - executes a file
app.use((req, res, next) => {
    const logFilePath = __dirname + "/logs.txt";
    fs.appendFileSync(logFilePath, `\nTime: ${Date.now()}`);
    req.himanshu = "he is a god user.";
    next()
})

app.get('/', (req, res) => {
    res.send(`Hello Himanshu, ${req.himanshu}`);
})

app.listen(port, () => {
    console.log(`Example app on ${port}`);
})

