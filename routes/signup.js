const express=require('express')
const router=express.Router();
const User=require('../schemas/user.schema')
const bodyParser=require('body-parser')
const passport=require('passport')
const Data=require('../schemas/data.schema')
const url=require('url')

passport.use(User.createStrategy());



passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
      done(null, user);
  });
router.get('/',(req,res)=>{
    res.render("signup");
});
router.post('/',(req,res)=>{
    User.register({username:req.body.username},req.body.password,function(err,user){
        if(err)
        {
          // console.log(err);
          res.redirect("/signup");
        }
        else{
          newData.save(function(err,result){
            if(!err)
            { 
              passport.authenticate("local")(req, res, function(){
                let username=user.username;
              res.redirect(url.format({pathname:"/admin-dashboard"
           }))
          });
            }
            else
            {
              // console.log(result);
            }
          })
        }
})
});
module.exports=router;
