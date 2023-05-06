const express=require('express')
const router=express.Router();
const passport=require('passport')
const url=require('url')
const User=require('../schemas/user.schema')

router.get('/',(req,res)=>{
    res.render("login");
});
router.post('/',(req,res)=>{
    const user = new User({
        username: req.body.username,
        password: req.body.password
      });
        req.login(user, function(err){
          if (err){
            // console.log(err);
          } else { 
            // console.log(user);

            passport.authenticate("local")(req, res, function(){
              let username=user.username;
              let ses={
                isAuthenticated:true,
                
              }
            req.session.ses=ses;
            req.session.save();
              res.redirect(url.format({pathname:"/admin-dashboard",
          }))
            });
          }
        });
});
module.exports=router;
