const express = require('express')
const app = express()
const port = 3000

// Express routing
const birds = require('./birds')

app.use('/birds', birds)

app.use(express.static("public"));

app.route('/')
    .get((req, res) => {
        console.log("You a get request!");
        res.send('Hello World!')
    })
    .post((req, res) => {
        console.log("You a post request!");
        res.send('Hello World post!')
    })

app.get('/index', (req, res) => {
    console.log("this is a index");
    res.sendFile('templates/index.html', { root: __dirname });
})

app.get('/api', (req, res) => {
    console.log("this is a index");
    res.json({ a: 1, b: 2, c: 3 });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
