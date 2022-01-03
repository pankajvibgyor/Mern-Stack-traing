const express = require('express');
const router=express.Router()
const otpSchema = require('./otpModel')
const dataSchema = require('./data')
const mongoose = require('mongoose');
const emailsend =async (req,res)=>{
    
    const {email}= req.body

    let data = await dataSchema.findOne({email:email})
    const responseType = {};
    if (!data){
        responseType.statusText = " error present"
        responseType.message = "  mail id not exists"
        

    }
    else{
         let otpCode = Math.floor((Math.random()*100000) +1);
        let otpData = new  otpSchema({
            _id: new mongoose.Types.ObjectId(),
            email:req.body.email,
            code:otpCode,
            expireIn :new Date().getTime() + 120*1000
        })
        let otpResponse =  otpData.save();
        
        responseType.statusText = " successfullllyyyy"
        responseType.message = " please check your mail id"

        
    }
    res.status(200).json(responseType)
}


module.exports ={
    emailsend    
}
