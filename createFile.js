const fs = require("fs");
fs.writeFile("./data.txt","This is from async prog", (err) => {
    if (err){
        console.log(err);
    }
        console.log("File Write completed now ")
    } );
console.log("File Write Processing");