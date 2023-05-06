const express=require('express')
const router=express.Router();
const passport=require('passport')
const url=require('url')
const test=require('../schemas/test.schema');
const session = require("express-session");
const cookieParser = require("cookie-parser");


router.get('/',(req,res)=>{
    res.render("authenticate");
});
router.post('/',(req,res)=>{
    test.find({username:req.body.username ,mobilenumber:req.body.mobileno},function(err,docs){
      if(err)
      {
        res.status(403).send();
      }
      else
      {
        if(docs.length==0)
        res.send("NO USER FOUND");
        else
        {
        req.session.applicant_detail={
          
          username:req.body.username,
          mobilenumber:req.body.mobileno,
          login:true
          
        };
        req.session.save();
              res.redirect(url.format({pathname:"/test-dashboard",
          }));
        }
      }
    });
});
module.exports=router;
