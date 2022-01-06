const express =require('express')
const cors=require('cors')
const dotenv =require('dotenv')
const mongoose = require('mongoose');
const login=require('./postlogin')
const register=require('./postregister')
const getData=require('./getdata')
const deleteData=require('./delete')
const patchData=require('./patch')
dotenv.config({path:'./config.env'})
const router=require('./router/router')
// const sortedData= require('./sortedData')
const changepass=require('./changepass')
const otpverify=require('./otpverify')
// const encrpt=require('./encryptionPass')

const app=express()
mongoose.connect("mongodb://localhost:27017/formdata",{useNewUrlParser: true , useUnifiedTopology: true })
.then(()=>console.log("connection succesful")).catch((err)=>console.log(err));

// mideelware creation
app.use(express.json())
app.use(cors()) 
app.use(login,register,getData,deleteData,patchData,router,otpverify,changepass)



app.listen(4000,()=>{
    console.log(`port is running on http://localhost4000`)
}) 


