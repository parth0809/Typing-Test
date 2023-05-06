const express=require('express')
const router=express.Router();
const Data=require('../schemas/data.schema')

router.get('/',(req,res)=>{
    var correct=0;
    for(var i=0;i<req.session.data['typed_para'].length;i++)
    {
        if(req.session.data['original_para'][i]===req.session.data['typed_para'][i])
        correct++;
    }
    let data={
        username:req.session.applicant_detail['username'],
        mobile_number:req.session.applicant_detail['mobilenumber'],
        original_para:req.session.data['original_para'],
        time:req.session.data['time'],
        language:req.session.data['language'],
        typed_para:req.session.data['typed_para'],
        correct:correct,
        wrong:req.session.data['typed_para'].length-correct,
    }
    res.render("currreport",{data:data});
});



module.exports=router;

