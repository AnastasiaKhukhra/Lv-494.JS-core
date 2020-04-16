const http = require("http");
const os = require("os");
const timeModule = require("./personalmodule")

http.createServer( function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(`Date of request: ${timeModule.date}<br>`);
    response.write(timeModule.greeting(os.userInfo().username));
}).listen(8000);

console.log("http://localhost:8000/");