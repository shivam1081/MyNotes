const http = require("http");

const server = http.createServer(function (req, res) {
    // This used to send the end the data at the end of the request
    if (req.url === '/getSecretData') {
        res.end("Secret Data");
    }
    res.end("Hello World!");
});

server.listen(7777);