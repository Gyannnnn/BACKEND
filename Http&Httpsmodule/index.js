const http = require('node:http');

const server = http.createServer(function(req,res){
    res.end("Hello Gyanaranjan")
})
server.listen(3000)