const http = require("http");
const fs = require('fs');
const url = require('url'); // npm i url

const root = '/home/artoriax/WebDev/NodeJS/05-URL/';

const myServer = http.createServer((req, res) => {
    // browser requests twice of icons, disable
    if (req.url === '/favicon.ico') return res.end();

    // to parse pathname and queries
    const myURL = url.parse(req.url, true);
    console.log(myURL);

    const log = `${Date.now().toString()} : ${req.url} : ${req.method} : latest\n`;
    fs.appendFile(root + 'log.txt', log, (err, data) => {
        switch (myURL.pathname) {
            case '/':
                res.end("Yo!");
                break;

            case '/about':
                const username = myURL.query.myname;
                res.end(`This property belows to ${username}!`);
                break;

            default:
                res.end("What u doin bruh...");
                break;
        }
    })
});

myServer.listen(3000, () => {
    console.log("Initializing the server");
});

// http://localhost:3000/about?myname=Malik&isDog=true
