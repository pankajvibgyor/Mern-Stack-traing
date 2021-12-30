// const bcrypt = require('bcryptjs/dist/bcrypt');
const jwt=require('jsonwebtoken')
const mongoose=require('mongoose')
const bcrypt = require('bcryptjs');
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
expireIn:{
    type:String
},
tokens:[
    {
      token:{
        type: String,
        required:true
      }  
    }
]



})
// password bycrpt
dataSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password= await bcrypt.hash(this.password,10)
        this.cpassword=undefined
    }
    next();

})

// generating token here
dataSchema.methods.generateAuthToken =async function(){
    try{
        let token=jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token
    }
    catch(error){
        console.log(error)

    }
}

module.exports=mongoose.model('dataSchema',dataSchema)
