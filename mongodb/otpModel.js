const mongoose = require('mongoose')
const otpSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
 email:{
    type:String,
    required:true,
    default:false
},

code:{
    type:String,
    required:true,
    default:false
},
expireIn:{
    type:Number,
    required:true,
    default:false
},
},
{
    timestamps:true
}
)

module.exports=mongoose.model('otps', otpSchema);
