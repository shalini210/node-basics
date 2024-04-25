const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const studentrouter = require("./Studentrouter");
const teacherrouter = require("./teacherrouter");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use("/student",studentrouter);
app.use("/teacher",teacherrouter);
app.get("/",(req,res)=>
{
    res.send("home page");
});

app.listen(3000,()=>console.log("server running "));
