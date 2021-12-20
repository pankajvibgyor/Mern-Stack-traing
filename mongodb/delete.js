const express=require('express')
const router=express.Router()
const dataSchema=require('./data')

router.delete("/delete/:id",async(req,res)=>{
    
    dataSchema.deleteOne({_id:req.params.id}).then((result)=>{
        res.json(result)
        console.log("deleted successfully")
    })

    .catch(err=>{
        console.log(err)
    })
  
  })

  
  module.exports=router