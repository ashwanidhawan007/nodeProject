const express = require("express");
const router = express.Router();


const app = express();

router.get('/Record', (req, res) =>{
    res.status(200).send("<h1> This is from  Express routers !!! </h1>");
    res.end();
})

app.use('/', (req, res) =>{
    res.status(200).send("<h1> Hello world from Express !!! </h1>");
})


app.listen("8050" );
console.log("Express is liestening 8050");
