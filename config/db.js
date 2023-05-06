let mongoose=require('mongoose')
require('dotenv').config()
let DBURI=process.env.DBURI;
db=mongoose.connect(DBURI);
module.exports=db