const express = require("express")
const app = express();
const bodyParse = require("body-parser")
const fs = require("fs")

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:true}));
app.get("/",(req,res)=>
{
    res.sendFile(__dirname+"/register.html")
})
app.post("/userregister",(req,res)=>
{
    console.log(req.body);
    fs.appendFile("register.txt",JSON.stringify(req.body)+",\n",(err)=>{
        if(!err)
        {
            res.sendFile(__dirname+"/register.txt")
        }
    })
    
})
app.listen(3000,()=>console.log("server running on 3000"));