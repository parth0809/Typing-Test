const express=require('express')
const router=express.Router();
const findOrCreate=require('mongoose-find-or-create')
const Type=require('../schemas/type.schema')
const mongoose =require('mongoose')

router.get('/',(req,res)=>{
    try{if(req.session.ses['isAuthenticated']===true)
    res.render("adddata");
    else
    res.status(403).send();}
    catch(err)
    {
        res.status(403).send();
    }
    
});
router.post('/',(req,res)=>{
    let lang=req.body.language;
    let data=req.body.Text;
    Type.findOneAndUpdate({ language: lang },{"$push":{"data":data}},(err, result) => {
        if(err)
        {
            console.log(err);
        }
      });
      
    res.redirect("/adddata")
});



module.exports=router;