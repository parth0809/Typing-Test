const express=require('express')
const router=express.Router();
const Test=require("../schemas/test.schema")
const data=require("../schemas/data.schema");
const Data = require('../schemas/data.schema');

router.get('/',(req,res)=>{
    try{if(req.session.ses['isAuthenticated']===true)
    res.render("settest");
    else
    res.status(403).send();}
    catch(err)
    {
        res.status(403).send();
    }
});
router.post('/',(req,res)=>{
    let time=req.body.time;
    let hrs=time.substr(0,2);
    let min=time.substr(3,2);
    let sec=time.substr(6,8);
    let noofsec=parseInt(hrs)*60*60+parseInt(min)*60+parseInt(sec);
    let user=new Test({
        username:req.body.username,
        mobilenumber:req.body.mobileno,
        language:req.body.language,
        noofpara:req.body.NUMBER,
        Time:noofsec
    });
    user.save(function(err,result){
        if(err)
        console.log(err);
        else{
           
    
        res.redirect('/settest')        
    }
    })
})

module.exports=router;

