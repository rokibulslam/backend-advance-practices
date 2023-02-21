/*
=========Create Node Server ==========
1. Require http module 
2. Create server with htttp module
3. createServer received callback function and callback function received two parameter req, res.
 * Must use res.end() for ending respond
4. listen server on port
*/

const http = require('http')

const server=http.createServer(function (req, res) {
    res.end("Hello World")
});

server.listen(5050);
console.log("server run success");

