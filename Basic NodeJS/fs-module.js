/*
1. Fs module: Synchronus Method
2. Fs module: Asunchronus
*/
const fs = require('fs')
const http = require('http')


const server = http.createServer((req, res) => {
    if (req.url == '/') {
        // Asynchronus File Read
        fs.readFile('home.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end()
        })
        // Synchronus File read
        const data = fs.readFileSync('home.html')
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        res.end()
        
    }
})

server.listen(5000)
console.log('Server is Running');