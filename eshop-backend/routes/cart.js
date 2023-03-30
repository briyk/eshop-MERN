const { verifyToken, verifyAuthorization, verifyAdmin } = require('./verifyToken')
const router = require('express').Router();
const Cart = require('../models/Cart')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')


// ================ Create Cart
router.post('/', verifyToken, async (req, res) => {
     const newCart = new Cart(req.body);

     try {
       const savedCart = await newCart.save();
       res.status(200).json(savedCart);
     } catch (err) {
       res.status(500).json(err);
     } 
   })
   


// ======update Cart
router.put('/:id', verifyToken, async (req, res) => {
     try {
       const updatedCart  = await Cart.findByIdAndUpdate(req.params.id, {$set:req.body}, { new: true })
       res.status(200).json(updatedCart)
     } catch (error) {
       res.status(500).json(error)
     }
   })
   

// ===================== delete Cart
router.delete('/:id', verifyAuthorization, async (req, res) => {
     try {
       const deleteCart = await Cart.findByIdAndDelete(req.params.id);
       if (!deleteCart) {
         return res.status(404).json({ message: 'Cart not found' });
       }
       res.status(200).json({ message: 'Cart deleted successfully' });
     } catch (error) {
       res.status(500).json(error);
     }
   });
   
// ================= get Cart
router.get('/find/:userId', verifyAuthorization ,async (req, res) => {
     try {
          const cart = await Cart.findOne({ userId: req.params.userId });
          if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
          }
          res.status(200).json(cart);
        } catch (err) {
          res.status(500).json(err);
        }
   });
   
// ================= get all 
router.get('/', verifyAdmin, async (req, res) => {
     try {
       const carts = await Cart.find();
       res.status(200).json(carts);
     } catch (err) {
       res.status(500).json(err);
     }
   });
   
   



module.exports = router;