const env =require('dotenv') 
const express =require("express")
const app =express()
//routes
const userRoutes=require('./routes/user')
const connectDB = require('./database/db')

// environement variable 
env.config({path:"./config.env"})
//port server from env file
PORT=process.env.PORT

//database connection
connectDB()

//middelware
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use('/api' ,userRoutes)


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})