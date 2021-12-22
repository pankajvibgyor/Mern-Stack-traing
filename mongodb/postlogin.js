const express=require('express')
const router=express.Router()
const dataSchema=require('./data')
router.post('/login', (req,res)=>{
    const {email,password}=req.body
    dataSchema.findOne({email:email},(err,user)=>{
        if(user){
            const isMatch= bcrypt.compare(password,user.password)

            if(isMatch){
            res.send({message:"Login succesfully",user:user})
        }
        else{
            res.send({message:"password doesnt match"})
        }
    
    
    
    }
        else{
            res.send({message:"user not matched"})
                   }

    } )
   
})   
module.exports=router
