const mongoose = require('mongoose')
const dataSchema=  require('./data')
const express=require('express')
const router=express.Router()

router.get('/sortedData', async(req,res)=>{

    try{
        
        const result =  await dataSchema
        .find().sort({_id:-1})
        res.send(result)
    }catch(err){
        console.log(err)
    }
})

module.exports= router
