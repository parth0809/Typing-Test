const mongoose = require('mongoose');
let Schema=require('mongoose').Schema;



let test=new Schema({
    username:{type :String},
    mobilenumber:{type:String},
    language:{type:String},
    Time:{type:Number},
    noofpara:{type:Number}
});


let Data=new mongoose.model('Test',test);

module.exports=Data;