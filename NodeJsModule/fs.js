// file system module
// reading files , WRITING inside files
//performa calculations or modifications on files
// text file
// reading a file

const fs =require("fs");
/*
fs.readFile('demo.txt', (err, data) => {
if (err) throw err;
console.log(data.toString());
});
*/
fs.readFile('demo.txt','utf-8', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});
