const express = require('express');

//app is an obljet used to interact with express functionality
const app = express();

app.get('/',(req,res) =>{
    res.send("Hello , Welcome to the api testing using nodemon and expres.js ");
});

app.get('/ineuron/courses',(req,res) =>{
    res.send(['Blockchain',"Web Devlopment","Java","Android Devlopment","Data Science"])
});

app.get('/ineuron/courses/:years/:months/:date',(req,res)=>{
    res.send(req.params);
})
const port = process.env.PORT || 1000;
app.listen(port,()=> console.log(`Listning on port ${port}`))