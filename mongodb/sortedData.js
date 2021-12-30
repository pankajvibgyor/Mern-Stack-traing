const mongoose = require('mongoose')
const studentSchema=  require('./data')


const SortedData = async()=>{
    try{
        console.log('hi')
        const result =  await studentSchema
        .find({}).select({name:1}).sort({name:1})
        console.log(result)
    }catch(err){
        console.log(err)
    }
}

SortedData();


module.exports= {SortedData}
