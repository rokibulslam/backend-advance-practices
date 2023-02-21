/*
=========Create Node Server ==========
1. Require http module 
2. Create server with htttp module
3. createServer received callback function and callback function received two parameter req, res.
4. listen server on port
*/

var http = require('http')

var server=http.createServer(function (req, res) {
    res.end("Hello World")
});

server.listen(5050);
console.log("server run success");

