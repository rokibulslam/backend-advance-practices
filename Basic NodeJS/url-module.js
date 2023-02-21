/* 
1. url is a built in module in nodeJS

*/
    
const http = require('http')
const URL = require('url')

console.log(URL);
const server = http.createServer((req, res) => {
    const myUrl = "http://rokibul.com/blog.html?year=2020&month=july"
    const myUrlObj =  URL.parse(myUrl, true)
    console.log(myUrlObj);
    const myHostName = myUrlObj.host;
    const myPathName = myUrlObj.pathname;
    const mySearchName = myUrl.search;
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(myHostName)
    res.end()
    
})

server.listen(5000)