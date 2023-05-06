const mongoose = require('mongoose');
let Schema=require('mongoose').Schema;



let data=new Schema({
    username:{type :String},
    mobile_number:{type:String},
    language:{type:String},
    total_keypressed_:{type: Number},
    total_correct_keypressed:{type:Number},
    total_time:{type:Number},
    date:{type:String}
});


let Data=new mongoose.model('Data',data);

module.exports=Data;