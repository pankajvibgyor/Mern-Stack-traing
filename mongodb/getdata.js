const express=require('express')
const router=express.Router()
const dataSchema=require('./data')


router.get("/get",async(req,res)=>{
    try{
    const user =await dataSchema.find()
        res.json(user)    
    }
    catch(err){
        console.log(err)
    }
  
  
  })

  router.get("/get/:id",async(req,res)=>{
    try{
        const Schemas=await dataSchema.findById(req.params.id)
         res.json(Schemas) 
    }catch(err){
        res.send(err)
    }
  
  })
  
  module.exports=router