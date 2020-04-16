//TASK 1
const http = require("http");
const path = require("path");
const os = require("os");

http.createServer( function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(`<h2>System information</h2>`)
    response.write(`Current user name: ${os.userInfo().username}<br>
                    OS type: ${os.type()}<br>
                    System work time: ${os.uptime()/60} minutes<br>
                    Current work directory: ${path.dirname(__filename)}<br>
                    Server file name: ${path.basename(__filename)}`);
}).listen(5000);

console.log("http://localhost:5000/");