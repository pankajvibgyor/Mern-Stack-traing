const dotenv =require('dotenv')
const express=require('express')
const app= express();
const connection=require('./db/config')
dotenv.config({path:'./config.env'})
const PORT=process.env.PORT

//  database call  
connection();
// midelware to make the connection with routes

app.use(express.json());
app.use(require('./router/auth'))



app.listen(PORT,(res,req)=>{
    console.log(`port is running on ${PORT} `)
})