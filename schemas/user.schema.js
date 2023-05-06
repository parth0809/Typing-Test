const mongoose = require('mongoose');
let Schema=require('mongoose').Schema;
const passport=require('passport')
const passportLocalMongoose=require('passport-local-mongoose');



let user=new Schema({
    username:{type :String},
    password:{type :String},
    role:{type:String},
    mobileno:{type:String}
});
user.plugin(passportLocalMongoose);




let User=new mongoose.model('User',user);

module.exports=User;