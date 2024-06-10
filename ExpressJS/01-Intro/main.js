const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/about', (req, res) => {
    res.send('Hey, Himanshu here')
})

app.get('/contact', (req, res) => {
    res.send('call me when you get lost')
})

app.get('/blog', (req, res) => {
    res.send('You like to read?')
})

app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from the db
    // For URL: http://localhost:3000/blog/javascript?mode=dark&region=in
    console.log(req.params) // will output { slug: 'javascript' }
    console.log(req.query) // will output { mode: 'dark', region: 'in' }

    res.send(`You have entered ${req.params.slug} blog`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.use(express.static('public'))
