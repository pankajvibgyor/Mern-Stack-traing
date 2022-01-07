const mongoose=require('mongoose');
const itemsSchema = new mongoose.Schema({
    image: {
        type: String,
        trim: true,
        required: [true, 'Please provide item image']
    },
    color: {
        type: String,
        trim: true
    },
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
    discount: {
        type: Number
    },
    details: {
        type: String,
        trim: true
    }
},{timestamps:true});
itemsSchema.virtual('totalPrice').get(function() {
    const sub_total = this.price + this.shipping;
    return (sub_total - ( ( sub_total / 100 ) * this.discount )).toFixed(2)
});
module.exports=mongoose.model('itemsSchema',itemsSchema)