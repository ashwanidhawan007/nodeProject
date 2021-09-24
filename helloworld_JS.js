//Create nodeJS server
const http =  require("http");
http.createServer((req,res)=>{
    res.writeHead( 200,{'Content-Type':'tex/plain'})
    res.end("hello world from nodeJS");
}).listen(8080,'localhost');
console.log("Server is listening at port 8080");



