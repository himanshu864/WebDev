import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    let title = "Himanshu's home";
    let content = "It is a very good place";
    let arr = ["Abc", "XYZ", 123];
    res.render('index', { title, content, arr });

});

// Static serve
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/html', (req, res) => {
    res.sendFile('views/index.html', { root: __dirname });
})

app.listen(port);
