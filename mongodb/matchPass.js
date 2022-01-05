const express = require('express');
const mongoose=require("mongoose")
const bcrypt = require('bcryptjs')
const router=express.Router()
const otpSchema = require('./otpModel')
const dataSchema = require('./data')
const currentTime=new Date().toLocaleTimeString-5000
router.post("/matchpass", async (req, res)=>{
   
    const {code, email, password} = req.body;
    if (!code) {
        return res.status(400).json({ error: "Please fill OTP" });
    }else {
    // if(mongoose.expireIn>=currentTime){
    const resetUser = await otpSchema.findOne({ email: email });
    if(resetUser){
        const matchOtp = await otpSchema.findOne({ code: code ,email:email,expire:false});
        if(matchOtp){
            const timerOtp = matchOtp.createdAt;
            const checkEx = new Date() - timerOtp
            console.log("Time Gap", checkEx)
            
            const logUser = await dataSchema.findOne({ email: email });
            const salt = await bcrypt.genSaltSync(10);
             const password = await req.body.password;
            let hash = await bcrypt.hashSync(password, salt);
            if (checkEx < 200000){
            logUser.password = hash;
            matchOtp.expire = true;
            logUser.save();
            // matchOtp.expire=true
            console.log(resetUser)
            return res.status(202).json({ message: "OTP Matched and Password Updated.." });
        }
        else {
            console.log("OTP Expire")
            return res.status(405).json({ message: "OTP Expire...." });
        }}
        else{
            return res.status(202).json({ message: "Wrong OTP.." });
        // }
    }}
    else{
        return res.status(404).json({ error: "User Not Found" });
    }
}})
 module.exports= router