const bcrypt = require('bcryptjs')
const express=require('express')
const router=express.Router()
const dataSchema=require('./data')

router.post('/login', async(req,res)=>{
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Please fill the tha data" });
        }
        const logUser = await dataSchema.findOne({ email: email });
        if (logUser) {                                   //use to find if user Exist or not
            
            const isMatch = await bcrypt.compare(password, logUser.password);         //Use to match data from bcrypt
         

            if (isMatch) {          //if user found so match the password
                
                res.status(202).json({ message: "Login Suceesfull", logUser });              
                              

                console.warn("Login Successful :");
            } else {
                res.send({ message: "Invalid Credentials " })
                console.warn("Invalid Credential");
            }

        } else {

            res.send({ message: "User not Found" })
        } 
    } catch (err) {
            console.log(err);
    }
   
})   
module.exports=router
