const express=require('express')
const router=express.Router()
const dataSchema=require('./data')
router.post("/otpsend", async (req,res) => {

    const user = await dataSchema.findOne({ email: req.body.email});
   const responseType={};
    if(user){
       let otpcode=Math.floor((Math.random()*1000+1));
       let otpData=new otpcode({
           email :req.body.email,
           code:otpcode,
           expireIn:new Date().getTime() +300*100
       })
       let otpresponse =await otpData.save();
       responseType.statusText='error'
       responseType.message='email id not exist'
    }
    res.status(200).json(responseType)

})
   
module.exports=router