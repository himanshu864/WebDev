require('dotenv').config();

const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");

// use json inside request's body
app.use(express.json());

const posts = [
    {
        username: 'Himanshu',
        title: 'Post 1'
    },
    {
        username: 'Malik',
        title: 'Post 2'
    }
];

app.get('/posts', authenticateToken, (req, res) => {
    // send a header authenication : Bearer <TOKEN> in postman
    res.json(posts.filter(post => post.username === req.user.name));
})

// Middleware to test token authenticity
function authenticateToken(req, res, next) {

    // Get token from passed: Bearer <TOKEN> at header of postman
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    // verify user
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);

        // return authenticated user
        req.user = user;
        next();
    })
}

app.listen(3000);
