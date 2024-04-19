var http = require("http")
var url = require("url")
http.createServer((req,res)=>
{
    const data = url.parse(req.url,true);
    console.log(data)
    res.write("welcome "+ data.query.uname);  
res.write("hello world ");
res.end();
}).listen(3000);
console.log("server running  on 3000")

// http.createServer((req,res)=>
// {
//     console.log(req.url);
 
//     const data = url.parse(req.url,true);
//     res.write("welcome "+ data.query.uname);
//     res.end();

// }).listen(3000);
// console.log("server running on localhost:3000");