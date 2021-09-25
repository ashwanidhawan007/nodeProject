const fs = require("fs");
const cb = (err, data)  =>{
    if (err){
        console.log (err);
    }
    else
    {
    
        console.log(data.toString());
    }   
}

fs.readFile("test.txt",cb) ;
console.log(2+2);
