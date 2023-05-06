const express=require('express')
const router=express.Router();
const passport=require('passport')
const url=require('url');
const test=require('../schemas/test.schema');

router.get('/',(req,res)=>{
    try{
        if(req.session.applicant_detail['login']===true)
    {
        
        test.find({username:req.session.applicant_detail['username'],mobilenumber:req.session.applicant_detail['mobilenumber']},function(err,docs){
            if(err)
            {
                res.status(404).send();
            }
            else
            {
              if(!docs)
              res.send("NO USER FOUND");
              else
              res.render("testdashboard",{username:docs[0].username,mobilenumber:docs[0].mobilenumber,language:docs[0].language,time:docs[0].Time,noofpara:docs[0].noofpara})
            }
          });
    }
    else
    res.status(403).send();
}
    catch(err)
    {
        res.status(403).send();
    }
});


module.exports=router;

