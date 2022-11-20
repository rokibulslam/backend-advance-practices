const http = require('http');

const server = http.createServer(function (req, res) {
    res.end('hello node.js');
});

const PORT = 5000;

server.listen(PORT)

console.log(`server is running at ${PORT}`)