 var http = require("http")
 var fs = require("fs");
var url = require("url")
 http.createServer((req,res)=>
 {
    // fs.writeFile("demoabc.txt","gfdg",(err)=>
    const data = url.parse(req.url,true);
   if(data.path!="/favicon.ico")
    {   
        fs.appendFile("demoabc.txt",JSON.stringify(data.query) + "\n",(err)=>
        {
        if(err)
        {
            res.write("error");
        }
    })
    }    
    res.write("file handling");
    res.end();
 }).listen(3000);