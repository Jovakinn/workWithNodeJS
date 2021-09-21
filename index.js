/*
const http = require('http')
const fs = require('fs')
const path = require('path')
*/

/*const server = http.createServer((req, res) =>{

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
    const ext = path.extname(filePath)
    let contentType = 'text/html'

    switch (ext){
        case '.css':
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/javascript'
            break
        default:
            contentType = 'text/html'
    }

    if (!ext) {
        filePath += '.html'
    }

    fs.readFile(filePath, (err, content) =>{
        if (err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) =>{
                if (err){
                    res.writeHead(500)
                    res.end('Error')
                } else {
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    })
                    res.end(data)
                }
            })
        } else {
            res.writeHead(200, {
                'Content-Type': contentType
            })
            res.end(content)
        }
    })*/
    const express = require('express');
    const app = express();

const helloResponse = app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});
const contactResponse = app.get('/contact', (req, res) => {
    res.sendFile(__dirname + "/public/contact.html");
});

if (app.get !== helloResponse && app.get !== contactResponse){
    app.get((req, res) => {
        res.sendFile(__dirname + "/public/error.html");
    });
}

    app.listen(3000);
//})

/*//const PORT = process.env.PORT || 3000

/!*
server.listen(3000, () =>{
    console.log(`Server has been started on ${PORT}...`)
})*!/*/
