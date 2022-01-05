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
            
            const token = await logUser.generateAuthToken()                        //Genrate Dynamic Token
            console.log("My Token is : ",token);
            res.cookie("jwToken", token, {
                expires: new Date(Date.now() +25892000000),
                httpOnly : true
            })

            if (isMatch) {          //if user found so match the password
                
                res.status(202).json({ message: "Login Suceesfull", logUser });
                
                // const mysalt= getSalt(hash);
                // console.warn("salt is ",mysalt)
                

                console.warn("Login Successful and token is:", token);
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
