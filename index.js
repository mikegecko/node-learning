const http = require('http');
const fs = require('fs');
const path = require('path');
const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req,res) => {

    if(req.url === '/'){
        const filePath = path.join(__dirname, 'index.html');
        const fileStream = fs.createReadStream(filePath);
        res.setHeader('Content-Type', 'text/html');
        fileStream.pipe(res);
        res.statusCode = 200;
    }
    else if(req.url === '/about'){
        const filePath = path.join(__dirname, 'about.html');
        const fileStream = fs.createReadStream(filePath);
        res.setHeader('Content-Type', 'text/html');
        fileStream.pipe(res);
        res.statusCode = 200;
    }
    else if(req.url === '/contact-me'){
        const filePath = path.join(__dirname, 'contact-me.html');
        const fileStream = fs.createReadStream(filePath);
        res.setHeader('Content-Type', 'text/html');
        fileStream.pipe(res);
        res.statusCode = 200;
    }
    else{
        const filePath = path.join(__dirname, '404.html');
        const fileStream = fs.createReadStream(filePath);
        res.setHeader('Content-Type', 'text/html');
        fileStream.pipe(res);
        res.statusCode = 404;
    }
})

//Listen to server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
