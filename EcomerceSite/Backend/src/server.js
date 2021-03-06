const env =require('dotenv') 
const express =require("express")
const app =express()
//routes
const authRoutes=require('./routes/auth')
const authadminRoutes=require('./routes/admin/auth')
const connectDB = require('./database/db')
const category=require('./routes/category')
const product=require('./routes/product')
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

app.use('/api' ,authRoutes,authadminRoutes,category,product)


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})