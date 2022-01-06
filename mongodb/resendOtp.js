const express = require('express');
const otpSchema = require('./otpModel')
const router=express.Router()

router.post('/resend',async(req,res)=>{
    otpSchema.updateOne({email:req.body.email},
        {$set:
            {
                code:Math.floor((Math.random()*100000) +1)
            }

        }).then((result)=>{
            res.status(200).json(result)
        })
        .catch((error)=>console.warn(error))
})

module.exports=router