//Create nodeJS server
const http =  require("http");
const https =  require("https");

const {stringify}  =  require("querystring");

const serverCB  =   (req,res) => {
    res.writeHead( 200,{'Content-Type':'tex/plain'});
        res.end("hello world from nodeJS");
};   
http.createServer(serverCB).listen(8080,'localhost');
console.log("Server is listening at port: 8080");
console.log(serverCB);

 
https.get("https://httpstat.us/200", (res) => {
  console.log(`API returned status: ${res.statusCode}`);
});
console.log("From the other side");






