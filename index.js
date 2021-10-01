const express = require("express");
const app = express();

app.use('/', (req, res) =>{
    res.status(200).send("<h1> Hello world !!! </h1>");
})
app.listen("8050" );
console.log("Express is liestening 8050");
