const express = require('express');
const router=express.Router()
const otpSchema = require('./otpModel')
const dataSchema = require('./data')
const mongoose = require('mongoose');
const emailsend =async (req,res)=>{
    
     const  {email}= req.body

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
        mailer(email,otpCode)
        
        responseType.statusText = " successfullllyyyy"
        responseType.message = " please check your mail id"

        
    }
    res.status(200).json(responseType)
}



const mailer = (email,code) => {
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        service : 'gmail',
        port : 587,
        secure : false,
        auth:{
            user:'pankaj.vibgyorweb@gmail.com',
            pass:'pankajsingh1'
        }
    });

    var mailOptions = {
        from:'pankaj.vibgyorweb@gmail.com',
        to:'21pankajchoudhary@gmail.com',
        subject:'sending email',
        text:`OTP is : ${code}`
    };

    transporter.sendMail(mailOptions, function(error,info){
        if(error)
        {
            console.log(error);
        }
        else
        {
            console.log('email sent:' + info.response)
        }
    });

}

module.exports ={
    emailsend   
}
