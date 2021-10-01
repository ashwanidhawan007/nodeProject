const fs = require("fs");
const fileExists = fs.existsSync("./data.txt");

if (fileExists) {
    fs.readFile("./data.txt" , (err,data) => {
    if (err) {
        console.err(err) ;
    }
    else
    {
    console.log(data.toString());
    }   
    });
} 
else 
{
    console.log("File already Exist");
}
     //const data = fs.readFileSync ("./data.txt");
 
