const express = require("express");
const app = express();
const port = 3000;

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

app.get('/posts', (req, res) => {
    res.json(posts);
})

app.get('/login', (req, res) => {
    // authenticate
})

app.listen(port, () => {
    console.log("Connected!");
});
