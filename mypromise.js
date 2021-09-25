const val= 4 ;

const mypromise = new Promise((resolve, reject) => {
if (val >0 ) {
    resolve ("valid Value");
}else {
reject ("invalid  Value");
}
});
mypromise.then(
    (result) =>{
        console.log(result);    
    },
    (error) =>{
        console.log(error);
    }
).finally(res=> {console.log("Promise completed")});

