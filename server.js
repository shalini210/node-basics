var http = require("http")

http.createServer((req,res)=>
{
    
    if(req.url=="/Home")
    {
        res.write("this is home page");
    }
    else
    {
        res.write("other page");                
    }
    // res.write("<p>hello from <br> server <br>this is third li ne </p>");
    res.end();

}).listen(3000);
console.log("server running on 3000");