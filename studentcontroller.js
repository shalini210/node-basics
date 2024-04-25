
exports.showallStudentS=(req,res)=>
{
    res.send([{name:"Ram"},{name:"john"}])
}
// const express = require("express");
// const router = express.Router();
// router.get("/",(req,res)=>
// {
//     res.send("st udent home ")
// })
// router.get("/insertstudent",(req,res)=>
// {
//     res.send("insert student section");
// })
// router.get("/updatestudent",(req,res)=>
// {
//     res.send("update student section");
// })
// router.get("/deletestudent",(req,res)=>
// {
//     res.send("delete student section");
// })
// // exports.default =  router;
// module.exports =router;