// File System
//file system - fs module
//install node js by defauly will be installed
//abstraction

const fs = require("fs");
// UTF- convert into simple plane text
fs.readFile("demo.txt",'utf-8',(err,data) =>{
    if(err){
        throw err.name;
    }
    else{
        console.log(data);
    }
} );



