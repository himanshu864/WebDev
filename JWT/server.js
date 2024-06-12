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

app.post('/login', (req, res) => {
    // Assuming User Authentication using Node and bcrypt

    const username = req.body.username;
    const user = { name: username };

    // (string to serialize, secret key)
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

    res.json({ accesstoken: accessToken });
})

function authenticateToken(req, res, next) {
    // get token, verify correct user and display user

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    })
}

app.listen(3000);
