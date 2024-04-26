const express = require("express")
const mycalculator = require("./Calculate");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>
{
    res.send("welcome");
});
app.post("/",(req,res)=>{

    var x=req.body.x;
    var fx = mycalculator.factorial(x);
    var sx = mycalculator.square(x);
    res.send("factorial is "+fx+ " <br>"+ "square is "+sx);
});
app.listen(3000,()=>console.log("server running "))
