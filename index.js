const http = require('http');
const url = require('url');
const fs = require('fs')
const server = http.createServer(function (req, res) {
  // Simple route
  // console.log(req.url)
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ name: "Rokibul Islam" })); //sending JSON Data
    res.end();
  } else if (req.url == "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<H1>This is Contact Page</H1>"); //sending HTML
    res.end();
  }
  if (req.url == "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<H1>This is About-Us Page</H1>");
    res.end();
  }
  // Query parsing from url
  const adress_url =
    "http://localhost:5000/contact?name=shetu&country=bangladesh";
  const parse_url = url.parse(adress_url, true);
  const queryObj = parse_url.query;
  console.log(queryObj);

  // Nodejs File System :Read Asynchronus
  if (req.url == "/file") {
    fs.readFile("data.txt", (err, data) => {
      if (err) {
        res.write("Failed To Read Data");
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  }
  // Nodejs File System :Read Synchronus
  if ((req.url = "/syncfile")) {
    const data = fs.readFileSync("data.txt");
    res.write(data);
    res.end();
  }
  // Nodejs File System :Write Synchronus
    if (req.url = '/writeasyncfile') {
        fs.writeFile("nwrite.txt", "Hello Node JS", (err) => {
          if (err) {
              res.write("Data Failed to write");
              res.end()
          } else {
              res.write("Write data successfully")
              res.end()
          }
        });
    }
});

const PORT = 5000;

server.listen(PORT)

console.log(`server is running at ${PORT}`)