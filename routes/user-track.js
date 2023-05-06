const express=require('express')
const router=express.Router();
const passport=require('passport')
const url=require('url')
const test=require('../schemas/test.schema');
const session = require("express-session");
const cookieParser = require("cookie-parser");
const data=require('../schemas/data.schema')


router.get('/',(req,res)=>{
    try{if(req.session.ses['isAuthenticated']===true)
    res.render("user-track");
    else
    res.status(403).send();}
    catch(err)
    {
        res.status(403).send();
    }
});
router.post('/',(req,res)=>{
    console.log(req.body.date);
    data.find({username:req.body.username ,mobile_number:req.body.mobileno},function(err,docs){
      if(err)
      {
        res.status(404).send();
      }
      else
      {
        if(!docs)
        res.send("NO USER FOUND");
        else
        {
            res.render("user-tracked",{data:docs});
        }
      }
    });
});
module.exports=router;
