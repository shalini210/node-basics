const express = require("express")
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=> 
{
      res.send("welcome");
});
app.post("/showuser",(req,res)=>
{
    // console.log(req.body)

    res.send("Welcome "+ req.body.username +" verify your contact no : "+ req.body.contact)
})


app.listen(3000,()=>console.log("server runnin g"));