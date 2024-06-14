const express = require("express");
const app = express();
const bcrypt = require("bcrypt")

const users = [];

app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

// const passport = require('passport');
// const initializePassport = require('./passport-config.js')
// initializePassport(passport);

app.get('/', (req, res) => {
    res.render('index.ejs', { user: "Himanshu" });
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.get('/register', (req, res) => {
    res.render('register.ejs');
});

app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        res.redirect('/login');
    } catch {
        console.log("bruh");
        res.redirect('/register');
    }
    console.log(users);
})

app.listen(3000);