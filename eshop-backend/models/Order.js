const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
   userid: { type: String, required: true },
    products:[
     {
        productid:{
               type: String
        },
        quantity:{
               default: 1,
               type: Number
        }  
     }
    ],
    amount: {type: String, required: true},
    address:{type: Object, required: true},
    status: {type: String, default: 'pending'}
} , {timestamps: true}

)

module.exports = mongoose.model('Order',OrderSchema) ;