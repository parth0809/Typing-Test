const express=require('express')
const router=express.Router();
const Type=require('../schemas/type.schema')
const User=require('../schemas/data.schema')
const test=require('../schemas/test.schema');

router.get('/',(req,res)=>{

    const username=req.session.applicant_detail['username'];
    const mobileno=req.session.applicant_detail['mobilenumber'];
    
    test.findOne({ username: username,mobilenumber:mobileno}, function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            let i=1;
            var para="";
            const time=docs['Time'];;
            const language=docs['language'];
            
            Type.find({language:docs['language']},function(err,doc){
                for(var j=0;j<docs['noofpara'];j++)
                {
                    para=para+(doc[0].data[Math.floor(Math.random()*doc[0].data.length)]);
                }
                res.render("starttest",{time:time,
                    para:para,language:language});
            })
    
           
        }
    });
});
router.post('/',(req,res)=>
{
    let language=req.body.language;
    let time=req.body.time;
    let original_para=req.body.para;
    let typed_para=req.body.typed_para;
    let original_length=original_para.length;
    let typed_para_length=typed_para.length;
    let correct=0;
    for(var i=0;i<typed_para_length;i++)
    {
        if(original_para[i]==typed_para[i])
        correct++;
    }
    let wrong=typed_para_length-correct;
    User.find({ name: req.session.applicant_detail['username'],mobilenumber:req.session.applicant_detail['mobileno']}, function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;
const data={
    language:req.body.language,
    time:req.body.time,
    original_para:req.body.para,
    typed_para:req.body.typed_para,
}
req.session.data=data;
req.session.save();
const formattedToday = dd + '/' + mm + '/' + yyyy;
test.find({username:req.session.applicant_detail['username'],mobilenumber:req.session.applicant_detail['mobilenumber']}, function(err,docs1){
    if(!err)
    {
    test.deleteOne({username:req.session.applicant_detail['username'],mobilenumber:req.session.applicant_detail['mobilenumber']},function(err){

    })
    }
});
let newdata=new User({
    username:req.session.applicant_detail['username'],
    mobile_number:req.session.applicant_detail['mobilenumber'],
language:req.body.language,
total_keypressed_:typed_para_length,
total_correct_keypressed:correct,
total_time:time,
date:formattedToday
});
newdata.save(function(err1,ress){
    if(!err1)
    res.redirect('/currreport')   
})
        }
    });
});

module.exports=router;

