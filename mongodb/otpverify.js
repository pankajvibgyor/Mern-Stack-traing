const express = require('express');
const mongoose=require("mongoose")
const bcrypt = require('bcryptjs')
const router=express.Router()
const otpSchema = require('./otpModel')
const dataSchema = require('./data');
const emailsend =require('./SendOtp')
// router.post("/matchpass", async (req, res)=>{
   
//     const {code, email, password} = req.body;
//     if (!code) {
//         return res.status(400).json({ error: "Please fill OTP" });
//     }else {
//     // if(mongoose.expireIn>=currentTime){
//     const resetUser = await dataSchema.findOne({ email: email });
//     if(resetUser){
//         const matchOtp = await otpSchema.findOne({ code: code ,email:email,expire:false});
//         if(matchOtp){
//             const timerOtp = matchOtp.createdAt;
//             const checkEx = new Date() - timerOtp
//             console.log("Time Gap", checkEx)
            
//             const logUser = await dataSchema.findOne({ email: email });
            // const salt = await bcrypt.genSaltSync(10);
            //  const password = await req.body.password;
            // let hash = await bcrypt.hashSync(password, salt);
            // if (checkEx < 200000){
            // logUser.password = hash;
            // matchOtp.expire=true
            // logUser.save();
            
//             console.log(resetUser)
//             return res.status(202).json({ message: "OTP Matched and Password Updated.." });
//         }
//         else {
//             console.log("OTP Expire")
//             return res.status(405).json({ message: "OTP Expire...." });
//         }}
//         else{
//             return res.status(202).json({ message: "Wrong OTP.." });
//         // }
//     }}
//     else{
//         return res.status(404).json({ error: "User Not Found" });
//     }
// }})
//  module.exports= router


 router.post("/otpverify" ,async(req,res)=>{     
    try{ 
        const {code}=req.body
        if(!code){
            res.status(401).json({error:"please type your otp "})
        }
        
          const dataMatch= await otpSchema.findOne({code:code,expire:false})
          console.log(dataMatch)
           if(dataMatch){  
                      
                const timerOtp = dataMatch.updatedAt;                                                                                              
                const checkEx = new Date() - timerOtp
                console.log("Time Gap", checkEx)

                if (checkEx < 200000){              
                     otpSchema.expire=true
                     return res.status(202).json({ message: "OTP Matched..." });
                }
                else {
                    console.log("OTP Expire")
                    return res.status(405).json({ message: "OTP Expire...." });
                }}
                else{
                    return res.status(401).json({ message: "Wrong OTP.." });
               
            }
    }
    catch(error){
        return res.status(404).json(error)
    }


 })
 module.exports= router


// router.post("/updatepass" , async (req,res)=>{
//     const {password}=req.body;
//     if(!password){
//         res.status(401).json({message:"please fill the password entity"})
//     }
//     else {
//         const pass= await dataSchema.findOne({password:password})
//         if(pass){
//             const salt = await bcrypt.genSaltSync(10);
//             const password = await req.body.password;
//            let hash = await bcrypt.hashSync(password, salt);
//            pass.password = hash;
//             hash.save()
//             return await res.status(200).json({message:"password is updated you can login now"})

//         }
//         else{
              
//             return await res.status(200).json({message:"password cannot updated"})
//         }
//     } 




// })
// module.exports= router