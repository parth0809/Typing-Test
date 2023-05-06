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
    res.render("date-track");
    else
    res.status(403).send();}
    catch(err)
    {
        res.status(403).send();
    }
});
router.post('/',(req,res)=>{
  let str=req.body.date;

  let filter=str.slice(-2)+'/'+str.slice(5,7)+'/'+str.slice(0,4); 
  data.find({date:filter},function(err,docs){
      if(err)
      {
        console.log(err);
      }
      else
      {
        if(!docs)
        res.send("NO USER FOUND");
        else
        {
            res.render("datetracked",{data:docs});
        }
      }
    });
});
module.exports=router;
