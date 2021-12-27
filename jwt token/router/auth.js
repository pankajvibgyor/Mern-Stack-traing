const jwt=require('jsonwebtoken')
const express=require('express')
const router=express.Router();
const User=require('../models/userSchema')
const bcrypt=require("bcryptjs")
router.get('/', (req,res)=>{
    res.send("hello this is get from router")
})

// register page

router.post('/register',async(req,res)=>{
const {name,email,phone,work,password,cpassword}=req.body;

if(!name||!email||!phone||!work||!password||!cpassword){
    return res.status(422).json({error:"plz filled the field properly"})
}
try{
    const userExist=await User.findOne({email:email})

    if(userExist){
        return res.status(422).json({error:"email is already in database"})

    }else if(password !=cpassword){
        return res.status(422).json({error:"password doent match "})
    }
    else{

      const user=new User({name,email,phone,work,password,cpassword})

    const userRegister=await user.save()
    if(userRegister){
        res.status(201).json({message:"user register Succesfully"})
    }
    else{
  res.status(500).json({error:"failed to register"})
    }

}}
catch(error){
    console.log(error)
}
})

//   Login route

router.post('/signin',async(req,res)=>{
    try{
        const{email , password}=req.body;
             
        if(!email|| !password){
            res.status(400).json("please filed the data ")
        }
        const userLogin=await User.findOne({email:email});
       
        if(userLogin){
            const isMatch=await bcrypt.compare(password,userLogin.password)
        
            // creating token

            let token=await userLogin.generateAuthToken();
            console.log(token)
            res.cookie("jwtToken",token),{
                expires: new Date(Date.now()+259200000)  ,
                httpOnly:true 
            }
       
            if(!isMatch){
            res.status(400).json({error:"Invalid Data please write again password"})
        }else{
            res.json({message:"user Signin succesfully"})
        }}
 
      else{
          res.status(400).json({error:"invalid data"})

        
        }
    }
    catch(error){
       console.log(error) 
    }


})





module.exports =router