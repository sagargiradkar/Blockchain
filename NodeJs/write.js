const fs = require("fs");
const path = require('path');

// logging
fs.writeFile(path.join(__dirname,"newFile.txt"),"This is a new file , we are writting something",
(err) =>{
    console.log("Successfully writtern into into file !");
    if(err){
        throw err.name;
    }
})

/*
console.log(__dirname);
console.log(__filename);
*/