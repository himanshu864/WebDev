require('dotenv').config();
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

// to store all valid refreshTokens
let refreshTokens = [];

app.post('/login', (req, res) => {
    // Assuming User Authentication using Node and bcrypt
    const username = req.body.username;
    const user = { name: username };
    const accessToken = generateAccessToken(user); // expires in 15sec
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET); // we'll manual expire this
    refreshTokens.push(refreshToken);
    res.json({ accessToken, refreshToken });
})

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' });
}

// Creating a new accessToken from refreshToken
app.post('/token', (req, res) => {
    const refreshToken = req.body.token;
    if (!refreshToken) return res.sendStatus(401);
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        const accessToken = generateAccessToken({ name: user.name });
        res.json(accessToken);
    })
})

// To delete specific refreshTokenss
app.delete('/logout', (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    res.sendStatus(204);
})

app.listen(4000);
