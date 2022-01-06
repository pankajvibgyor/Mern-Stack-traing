const User =require('../models/user')
const signup= async(req,res)=>{
    try{
 const emailFind=  await User.findOne({email:req.body.email})
 if(emailFind){
     res.status(400).json({message:"Email is found in the cart"})
 }
 else{
     const{
         firstName,
         lastName,
         email,
         password
     }=req.body
     const user=new User({
        firstName,
        lastName,
        email,
        password,
        username:Math.random().toString()
    })
    user.save((error,data)=>{
        if(error){
            return res.status(400).json({message:"something went wrong"})
        }
        else{
            return res.status(200).json({message:"succesfully register"})
        }

    })

 }
    }
    catch(error){
        return res.status(500).json(error)
    }



}
module.exports={signup}