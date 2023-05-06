const express=require('express')
const router=express.Router();
const data=require('../schemas/data.schema')


router.get('/',(req,res)=>{
    try{if(req.session.ses['isAuthenticated']===true)
    { data.find({},(err,docs)=>{
        
        res.render("userdata",{ data: docs});
    })}
    else
    res.status(403).send();}
    catch(err)
    {
        res.status(403).send();
    }
});



module.exports=router;

