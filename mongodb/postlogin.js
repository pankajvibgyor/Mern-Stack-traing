const bcrypt = require('bcryptjs')
const express=require('express')
const router=express.Router()
const dataSchema=require('./data')

router.post('/login', async(req,res)=>{
try{
       const {email,password}=req.body
      dataSchema.findOne({email:email},async(err,user)=>{
        if(user){
            const isMatch=  bcrypt.compare(password,user.password)
            
            let token=await  user.generateAuthToken();
            console.log(token)
            res.cookie("jwtToken",token),{
                expires: new Date(Date.now()+259200000)  ,
                httpOnly:true 
            }

            if(isMatch){
            res.send({message:"Login succesfully",user})
            }
        else{
            res.send({message:"password doesnt match"})
        }}
    
    
    
    
        else{             
            res.send({message:"user not matched"})
              } 
        })}
              
    catch(error){
                  console.log(error)
              }
                   

  
   
})   
module.exports=router
