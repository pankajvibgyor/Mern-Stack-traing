const mongoose=require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Please provide item image']
    },
    slug: {
        type: String,
        trim: true,
        unique:true
    },
    productPicture:[
        {
            img:{
            type:String
        }}
    ],
    reviews:[
        {
            userId:{type:mongoose.Schema.Types.ObjectId,
            ref:'userSchema'},
            reviews:String
        }
    ],
    category:{type:mongoose.Schema.Types.ObjectId,ref:'Category'},
    size: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Please provide item price']
    },
    shipping: {
        type: Number
    },
    offer: {
        type: Number
    },
    details: {
        type: String,
        trim: true
    },
    createdBy:{type:mongoose.Schema.Types.ObjectId,ref:'userSchema'},
    updateAt:Date,
}
,{timestamps:true});

module.exports=mongoose.model('product',productSchema)