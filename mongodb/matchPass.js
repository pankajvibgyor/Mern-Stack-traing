const express = require('express');
const bcrypt = require('bcryptjs')
const router=express.Router()
const otpSchema = require('./otpModel')
const dataSchema = require('./data')
const currentTime=new Date().toLocaleTimeString
router.post("/matchpass", async (req, res)=>{
    const {code, email, password} = req.body;

    if (!code) {
        return res.status(400).json({ error: "Please fill OTP" });
    }
    const resetUser = await otpSchema.findOne({ email: email });
    if(resetUser){
        const matchOtp = await otpSchema.findOne({ code: code ,email:email,expire:true});
        if(matchOtp){
            
            const logUser = await dataSchema.findOne({ email: email });
            let hash = bcrypt.hashSync(req.body.password, 10);
            logUser.password = hash;
            
            logUser.save();
            expire=false
            console.log(resetUser)
            return res.status(202).json({ message: "OTP Matched and Password Updated.." });
        }
        else{
            return res.status(202).json({ message: "Wrong OTP.." });
        }
    }
    else{
        return res.status(404).json({ error: "User Not Found" });
    }
 })
 module.exports= router

 