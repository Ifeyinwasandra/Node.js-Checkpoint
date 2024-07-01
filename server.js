var http = require("http");

http.createServer((request, response) => {
    response.writeHead(200, {"content-Type": "text/plain"});

    response.end("Hello Node!!!!");
}).listen(3000);
console.log("Server is runing on port 3000");
