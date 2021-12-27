const mongoose=require('mongoose')

const connection=async()=>{
    await mongoose.connect(process.env.DATABASE ,{
    useNewUrlParser: true,
    useUnifiedTopology:true
});
console.log("connect succesfully")
};
module.exports =connection