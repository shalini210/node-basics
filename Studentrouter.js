const express = require("express");
const Scontroller = require("./studentcontroller")
const router = express.Router();
router.get("/",(req,res)=>
{
    // res.send("st udent home ")
    Scontroller.showallStudentS(req,res)
})
router.post("/",(req,res)=>
{
    console.log(req.body)
    res.send(req.body.name +" inserted successfully");
})
router.put("/",(req,res)=>
{
    res.send("update student section");
})
router.delete("/",(req,res)=>
{
    console.log(req.body)
    res.send("delete student section");
})
// exports.default =  router;
module.exports =router;
