
const fs = require("fs");

fs.readFile('demo.txt','utf-8',(err,data) =>{
    if(err){
        throw err.name;
    }
    else{
        console.log(data);
    }
});


//assynchronous nature will show non blocking io
process.on("uncaughtException",err => {
    console.error(`There is some error that neet to be check ${err}`);
    process.exit();
});

console.log("This part will be printed at last")