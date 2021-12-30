const express=require('express')
const router=express.Router()
const dataSchema=require('./data')

router.post('/register', (req,res)=>{
    const {firstName,lastName,Gender,email,password}=req.body
    dataSchema.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"user already register"})
        }
        else{
            const user= new dataSchema({
                firstName,lastName,Gender,email,password
            })
            user.save(err=>{
                if(err){
                    res.send(err)
                }
                else{
                    console.log(user)
                    res.send({message:"Succesfully Register now you can login"})
                      
                }
            })
         
        }

    } )
   
})   

       
module.exports=router
