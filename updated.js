const fs = require("fs");

fs.appendFile("./data.txt", "\n This is another line async", (err) =>{

    if (err) {
        console.err(err) ;
    }     else  {
    console.log("updated file");
    } 
} );
