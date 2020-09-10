var http = require('http');

var server = http.createServer(function(req, res) {
    var body = "<h1>Welcome to NodeJS</h1>";
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': body.length
    });
    res.write(body);
    res.end;
});

const port = process.env.PORT || 8080;

server.listen(port);
console.log("http://localhost:5050");