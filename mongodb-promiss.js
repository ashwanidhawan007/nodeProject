const mongodb = require("mongodb");
const uri = "mongodb+srv://test:test@cluster0.cbdyt.mongodb.net/EmployeeDB?retryWrites=true&w=majority";
const mongoclient =  mongodb.MongoClient; 

//const client = new mongoclient (uri, {useNewUrlParser:true}) ;

mongoclient.connect(uri)
.then( 
  (client) => {
    console.log("mongodb is connectd");
    const collection = client.db('EmployeeDB').collection('Employee');
    collection.insertOne({name : 'ashwani' , role : 'IT'} )
    collection.insertOne({name : 'kumar' , role : 'Sales'} )
    .then(
        ()=>{
            console.log("document insterted");
        }
    )
  }
);
