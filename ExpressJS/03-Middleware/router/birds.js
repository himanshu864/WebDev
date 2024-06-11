const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log("this middleware is specific to this router");
    next();
})

// define the home page route
router.get('/', (req, res) => {
    res.send(`Birds home page`)
})

// define the about route
router.get('/about', (req, res) => {
    res.send('About birds')
})

module.exports = router
