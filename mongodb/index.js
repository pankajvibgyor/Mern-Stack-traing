const express =require('express')
const cors=require('cors')
const mongoose = require('mongoose');
const login=require('./postlogin')
const register=require('./postregister')
const getData=require('./getdata')
const deleteData=require('./delete')
const patchData=require('./patch')


const app=express()
mongoose.connect("mongodb://localhost:27017/formdata",{useNewUrlParser: true , useUnifiedTopology: true })
.then(()=>console.log("connection succesful")).catch((err)=>console.log(err));

// mideelware creation
app.use(express.json())
app.use(cors())
app.use(login,register,getData,deleteData,patchData)



app.listen(4000,()=>{
    console.log(`port is running on http://localhost4000`)
}) 


