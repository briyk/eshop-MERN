const { verifyToken, verifyAuthorization, verifyAdmin } = require('./verifyToken')
const router = require('express').Router();
const Order = require('../models/Order')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')


// ================ Create Order
router.post('/', verifyAdmin, async (req, res) => {
     const newOrder = new Order(req.body);

     try {
       const savedOrder = await newOrder.save();
       res.status(200).json(savedOrder);
     } catch (err) {
       res.status(500).json(err);
     } 
   })
   


// ======update Order
router.put('/:id', verifyAdmin, async (req, res) => {
     try {
       const updatedOrder  = await Order.findByIdAndUpdate(req.params.id, {$set:req.body}, { new: true })
       res.status(200).json(updatedOrder)
     } catch (error) {
       res.status(500).json(error)
     }
   })
   

// ===================== delete Order
router.delete('/:id', verifyAdmin, async (req, res) => {
     try {
       const deleteOrder = await Order.findByIdAndDelete(req.params.id);
       if (!deleteOrder) {
         return res.status(404).json({ message: 'Order not found' });
       }
       res.status(200).json({ message: 'Order deleted successfully' });
     } catch (error) {
       res.status(500).json(error);
     }
   });
   
// ================= get user Order
router.get('/find/:userId', verifyAuthorization ,async (req, res) => {
     try {
          const orders = await Order.find({ userId: req.params.userId });
          if (!orders) {
            return res.status(404).json({ message: 'Order not found' });
          }
          res.status(200).json(orders);
        } catch (err) {
          res.status(500).json(err);
        }
   });
   
// ================= get all 
router.get('/', verifyAdmin, async (req, res) => {
     try {
       const orders = await Order.find();
       res.status(200).json(orders);
     } catch (err) {
       res.status(500).json(err);
     }
   });
   
  // ================= get monthly income stats
router.get('/income', verifyAdmin, async (req, res) => {
     const date = new Date();
     const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
     const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
     try {
          const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
              $project: {
                month: { $month: "$createdAt" },
                sales: "$amount",
              },
            },
            {
              $group: {
                _id: "$month",
                total: { $sum: "$sales" },
              },
            },
          ]);
          res.status(200).json(income);
        } catch (err) {
          res.status(500).json(err);
        }
   
      
}); 



module.exports = router;