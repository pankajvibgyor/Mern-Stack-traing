const express = require('express');
const mongoose=require("mongoose")
const bcrypt = require('bcryptjs')
const router=express.Router()
const otpSchema = require('./otpModel')
const dataSchema = require('./data');

router.post("/updatepass" , async (req,res)=>{
    const {email,password}=req.body;
    if(!email){
        res.status(401).json({message:"please fill the password entity"})
    }
    else {
        const pass= await dataSchema.findOne({email:email})
        console.log(pass)
        if(pass){
        const newData=await otpSchema.findOne({email:pass.email})
        console.log(pass.email)
        console.log(newData)
        if(newData){
            // const salt = await bcrypt.genSaltSync(10);
        //    let password = await bcrypt.hashSync(req.body.password, salt);
            // pass.password=password
            pass.password=req.body.password
           pass.save()
            console.log(pass)
            return await res.status(200).json({message:"password is updated you can login now"})
           
        }
        else{
              
            return await res.status(401).json({message:"password cannot updated"})
        }}
        else{
            return await res.status(401).json({message:"user not found"})
        }
    } 

   


})
module.exports= router