// server.mjs
// 65 thuousand port numbers

var http = require('http');
var fs = require('fs');
var os = require('os');

console.log(os.freemem());
console.log(os.cpus());
console.log(os.hostname());
console.log(os.platform());
console.log(os.uptime());
console.log(os.arch());
console.log(os.homedir());
console.log("Normal Log");
console.warn("Danger");
console.assert(true,"transaction completed");
console.assert(false,"transaction failed");



const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World!\n');
 //res.end('{"name":"John", "age":30, "city":"New York"}');

if(req.url === '/'){
  fs.readFile("prac.txt",(error,data) => {
    res.write(data);
    res.end()
  })
}

});



// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
