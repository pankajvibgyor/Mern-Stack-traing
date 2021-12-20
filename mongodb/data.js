const mongoose=require('mongoose')
const dataSchema=new mongoose.Schema({
firstName:{
    type:String,
    required:true,
    default:false
},
lastName:{
    type:String,
    required:true,
    default:false
},
Gender:{
    type:String,
    required:true,
    default:false
},
email:{
    type:String,
    required : false,
    default:false
},
password:{
    type:String,
    required: false ,
    default: false

},




})
module.exports=mongoose.model('dataSchema',dataSchema)
