const http = require('http');

const server = http.createServer(function (req, res) {
    // console.log(req.url)
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({name:"Rokibul Islam"}));    //sending JSON Data
        res.end();
    }
    else if (req.url == '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<H1>This is Contact Page</H1>");   //sending HTML
        res.end();
    };
    if (req.url == '/about') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<H1>This is About-Us Page</H1>");
        res.end();
    }
});

const PORT = 5000;

server.listen(PORT)

console.log(`server is running at ${PORT}`)