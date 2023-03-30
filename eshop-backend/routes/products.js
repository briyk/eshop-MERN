const { verifyToken, verifyAuthorization, verifyAdmin } = require('./verifyToken')
const router = require('express').Router();
const Product = require('../models/Product')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')


// ================ Create Product
router.post('/', verifyAdmin, async (req, res) => {
     const newProduct = new Product(req.body);

     try {
       const savedProduct = await newProduct.save();
       res.status(200).json(savedProduct);
     } catch (err) {
       res.status(500).json(err);
     } 
   })
   


// ======update Product
router.put('/:id', verifyAdmin, async (req, res) => {
     try {
       const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {$set:req.body}, { new: true })
       res.status(200).json(updatedProduct)
     } catch (error) {
       res.status(500).json(error)
     }
   })
   

// ===================== delete Product
router.delete('/:id', verifyAdmin, async (req, res) => {
     try {
       const deletedProduct = await Product.findByIdAndDelete(req.params.id);
       if (!deletedProduct) {
         return res.status(404).json({ message: 'Product not found' });
       }
       res.status(200).json({ message: 'Product deleted successfully' });
     } catch (error) {
       res.status(500).json(error);
     }
   });
   
// ================= get Product
router.get('/:id', verifyAdmin ,async (req, res) => {
     try {
       const product = await Product.findById(req.params.id);
       if (!product) {
         return res.status(404).json({ message: 'Product not found' });
       }
       res.status(200).json(product);
     } catch (error) {
       res.status(500).json(error);
     }
   });
   
// ================= get all products
router.get("/", async (req, res) => {
     const qNew = req.query.new;
     const qCategory = req.query.category;
     try {
       let products;
   
       if (qNew) {
         products = await Product.find().sort({ createdAt: -1 }).limit(1);
       } else if (qCategory) {
         products = await Product.find({
           categories: {
             $in: [qCategory],
           },
         });
       } else {
         products = await Product.find();
       }
   
       res.status(200).json(products);
     } catch (err) {
       res.status(500).json(err);
     }
   });
   



module.exports = router;