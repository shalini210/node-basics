var express = require("express")
var app = express();
app.get("/",(req,res)=>

{
    // res.send("demo.html");
    res.sendFile(__dirname+"/demo.html")
});
app.get("/about",(req,res)=>
{
    // res.send("this is about ")
    
    res.sendFile(__dirname+"/about.html")
})
app.get("/contact",(req,res)=>
{
    // res.send("this is about ")
    console.log(req.query);
    // res.send("welcome "+ req.query.username)
    res.sendFile(__dirname+"/contact.html")
    // res.send({"name":"sdf"})
})
app.post("/",(req,res)=>
{
    res.sendFile(__dirname+"/demo.html")
})

app.listen(3000,()=>console.log("server running "))