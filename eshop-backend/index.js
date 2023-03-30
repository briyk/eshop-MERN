const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const users = require('./routes/users')
const auth = require('./routes/auth')
const products = require('./routes/products')
const cart = require('./routes/cart')
const order = require('./routes/order')
dotenv.config();


// ====================== connect to DB
mongoose.connect(process.env.MONGO_URL)
     .then(() => console.log("Successfully Connect DB"))
     .catch((error) => console.log(`You have some ${error}`))


app.use(express.json()); 
app.use('/api/auth', auth)

app.use('/api/users', users)
app.use('/api/products', products)
app.use('/api/cart', cart)
app.use('/api/order', order)

const port = process.env.PORT || 3000;
app.listen(port, console.log(`U at port ${port}`))