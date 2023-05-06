const mongoose = require('mongoose');
let Schema=require('mongoose').Schema;
const findOrCreate = require('mongoose-find-or-create')
let type=new Schema({
    language:{type :String},
    data:[{type:String}]
});

type.plugin ( findOrCreate );

let Type=new mongoose.model('Type',type);

module.exports=Type;