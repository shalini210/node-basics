var http = require("http");
var fs = require("fs");
var url = require("url")
http.createServer((req,res)=>
{
    
    const data = url.parse(req.url,true);
    console.log(data);
    if(data.path=="/favicon.ico")
    {

    }
    else
    {
        if(data.path=="/")
        {
    fs.readFile("form.html",function(err,data)
    {
        res.write(data);
        return res.end();
    })
}
else
{
    fs.appendFile("demoabc.txt",JSON.stringify(data.query) + "\n",(err)=>
    {
    if(err)
    {
        res.write("error");
    }
    else
    {
        fs.readFile("form1.html",function(err,data)
    {
        res.write(data);
        return res.end();
    })
    }
}
    )
}
}
    // res.end();
}).listen(3000);
console.log("server running ");