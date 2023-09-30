const http = require('http');

// createServer method - create http server
// www.google.com/ineuron
const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.write("Hello, this is http server response\n");
        res.write("Welcome to my new local host")
        res.end();
    }

    if(req.url ==='/ineuron/courser'){
        res.write(JSON.stringify(['Blockchain','Data science','Web Devlopment','Java','Testing']));
        res.end();
    }
}

);




server.listen(5000);

console.log('Listning on port 5000')