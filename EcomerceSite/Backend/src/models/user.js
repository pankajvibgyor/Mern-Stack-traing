const mongoose=require('mongoose');
const bcrypt=require('bcryptjs')
const userSchema =new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20

    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20

    },
    userName:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index:true,
        lowercase:true

    
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        

    },
    password :{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    contactNumber:{type:String},
    

},{timestamps:true})


userSchema.pre('save',async function(next){
    if(!this.isModified("password")){
        next()
    }
    const salt =await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt)
     next();
})
userSchema.virtual('fullName')
.get(function(){
    return `${this.firstName} ${this.lastName}`
})
userSchema.methods.matchPasswords=async function(password){
    return await bcrypt.compare(password,this.password)
}

module.exports=mongoose.model('userSchema',userSchema)
