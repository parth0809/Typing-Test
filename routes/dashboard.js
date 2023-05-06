const express=require('express')
const router=express.Router();



router.get('/',(req,res)=>{
    try{if(req.session.ses['isAuthenticated']===true)
    res.render("dashboard");
    else
    res.status(403).send();}
    catch(err)
    {
        res.status(403).send();
    }
});



module.exports=router;

