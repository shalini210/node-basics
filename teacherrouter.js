const express = require("express");
const router = express.Router();
router.get("/",(req,res)=>
{
    res.send("teacher home ")
})
router.get("/insertteacher",(req,res)=>
{
    res.send("insert teacher section");
})
router.get("/updateteacher",(req,res)=>
{
    res.send("update teacher section");
})
router.get("/deleteteacher",(req,res)=>
{
    res.send("delete teacher section");
})
// exports.default =  router;
module.exports=router;