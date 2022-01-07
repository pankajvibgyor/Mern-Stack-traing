const userSchema =require('../models/user')
const jwt =require('jsonwebtoken')
// new user signup 

exports.signUp= async(req,res)=>{
    try{
 const emailFind=  await userSchema.findOne({email:req.body.email})
 if(emailFind){
     res.status(400).json({message:"Email is already in database please type new email"})
 }
 else{ 
    const{
        firstName,
        lastName,
        email,
        password
    }=req.body   
     const newUser=new userSchema({
        firstName,
        lastName,
        email,
        password,
        userName: firstName + Math.random().toString(36).substr(2, 3)
    })
    newUser.save((error)=>{
        if(error){
            console.log(error)
            return res.status(400).json({message:"something went wrong"})
        }
        else{
            return res.status(200).json({message:"user succesfully register"})
        }

    })}}
    catch(error){
        return res.status(500).json(error)
    }}



// new user login

exports.signIn=async(req,res)=>{

    try{
    const {email,password}=req.body
    if(!email && !password){
        res.status(400).json({message:"please fill the data first"})
    }
    else{
        const user =await userSchema.findOne({email}).select("+password");
        if(!user){
            return res.status(401).json({message:"invalid user crendential "})
        }
        const isMatch=await user.matchPasswords(password)

        if(isMatch){
      //token generation            
            const token =jwt.sign({_id:user._id},process.env.JWT_SECREAT_KEY,{expiresIn:'1h'})
            const {_id,firstName,lastName,email,role,fullName}=user

            res.status(200).json({message:" 😅 😅 wowww ho gaya login ⚽ 😸 🐌 💀 😄",
                user:{
                _id,firstName,lastName,email,role,fullName},token})  
        }else{
       
        return res.status(401).json({message:"email or password is wrong "})
     } }
}
catch(error){
    console.log(error)
    res.status(500).json(error)
}


}

// authentication 


exports.requireSignin=(req,res ,next)=>{
    var token = req.headers.authorization.split(' ')[1];
    const user =jwt.verify(token ,process.env.JWT_SECREAT_KEY)
    req.user=user
    console.log(user)
    next();

}