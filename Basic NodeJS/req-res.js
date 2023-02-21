/*
Create Response
1. Create server
2. get url req.url
3. res.writeHead(status, data) for Head
4. res.write() for body
5. res.end()
*/
const http = require('http')

const server=http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<h1>This is Home Page</h1>')
        res.end()
    }
    if (req.url == "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>This is About Page</h1>");
      res.end();
    }
})

server.listen(5000)
console.log('Server is Running');