const http = require("http");
var { add, mul, sub, div, mod } = require("./operations.js");
const url = require("url");

let server = http.createServer((req, res) => {
    var parsed = url.parse(req.url);
    var path = parsed.pathname;

    res.setHeader('Content-Type', 'application/json'); 

    if (path == "/sum") {
        res.statusCode = 200;
        res.write(JSON.stringify({ result: add(1, 2, 3, 4, 5) }));
    } 
    else if (path == "/mul") {
        res.statusCode = 200;
        res.write(JSON.stringify({ result: mul(1, 2, 3, 4, 5) }));
    } 
    else if (path == "/sub") {
        res.statusCode = 200;
        res.write(JSON.stringify({ result: sub(1, 2, 3, 4, 5) }));
    } 
    else if (path == "/div") {
        res.statusCode = 200;
        res.write(JSON.stringify({ result: div(1, 2, 3, 4, 5) }));
    } 
    else if (path == "/mod") {
        res.statusCode = 200;
        res.write(JSON.stringify({ result: mod(1, 2, 3, 4, 5) }));
    } 
    else {
        res.statusCode = 404;
        res.write(JSON.stringify({ error: "The requested path operation is not available" }));
    }

    res.end();
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
