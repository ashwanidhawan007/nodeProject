//Create nodeJS server
const http =  require("http");
const {stringify}  =  require("querystring");

const serverCB  =   (req,res) => {
    res.writeHead( 200,{'Content-Type':'tex/plain'});
        res.end("hello world from nodeJS");
};   
http.createServer(serverCB).listen(8080,'localhost');
console.log("Server is listening at port: 8080");
console.log(serverCB);