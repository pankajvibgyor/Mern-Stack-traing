const express=require('express')
const router=express.Router()
const dataSchema=require('./data')
const jwt=require('jsonwebtoken')



router.post('/emailsend',async(req,res)=>{
    let data=await dataSchema.findOne({email:req.body.email});
    const responseType={};
    if(data){
        let otpCode=Math.floor((Math.random()*10000+1));
        let dataSchema=new otp({
            email:req.body.email,
            code:otpCode,
            expireIn:newDate().getTime()+300*1000
        })
        let otpResponse=await dataSchema.save();
        responseType.statusText='sucess'
        responseType.message="pleasecheck id"
    }
    else{
        responseType.statusText='error'
        responseType.message="type correct email"
    }
 
  

})
  
  module.exports=router