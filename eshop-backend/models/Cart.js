const mongoose = require('mongoose');

const CartScehma = new mongoose.Schema({
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
    ]
} , {timestamps: true}

)

module.exports = mongoose.model('Cart',CartScehma) ;