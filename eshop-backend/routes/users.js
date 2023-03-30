const { verifyToken, verifyAuthorization, verifyAdmin } = require('./verifyToken')
const router = require('express').Router();
const User = require('../models/Users')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

// ======update user
router.put('/:id', verifyAuthorization, async (req, res) => {
     if (req.body.password) {
          //encrypted password
          req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET).toString()
     }
     try {
          const updatedUser = await User.findByIdAndUpdate(req.params.id, {
               $set: req.body
          }, { new: true })
          res.status(200).json(updatedUser) 
     } catch (e) {
          return res.status(500).json(e)
     }
})

// ===================== delete user
router.delete('/:id', verifyAuthorization, async (req, res) => {
     try {
       const deletedUser = await User.findByIdAndDelete(req.params.id);
       res.status(200).json(deletedUser); 
     } catch (error) {
       res.status(500).json(error);
     }
   });

// ================= get user with Admin
router.get('/find/:id', verifyAdmin, async (req, res) => {
     try {
       const user = await User.findById(req.params.id);
       const {password,...others} = user._doc ;
         res.status(200).json("Yes, this user is an admin.");
     } catch (error) {
       res.status(500).json(error);
     }
   });
// ================= get all users
router.get('/', verifyAdmin, async (req, res) => {
     const query = req.query.new
     try {
          const users = query? await User.find().sort({ _id: -1 }).limit(3) : await User.find();
          res.status(200).json(users);
        } catch (error) {
          res.status(500).json(error);
        }
   });

//================== get user stats
router.get('/stats', verifyAdmin, async (req,res) =>{
     const date = new Date() ;
     const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))
     try{
          const stats = await User.aggregate([
               {$match:{createdAt: {$gte: lastYear} }},
               {$project:{month: {$month: "$createdAt"} }},
               {$group:{_id: "$month", total: {$sum: 1}}}
          ])
          res.status(200).json(stats);
     }catch (error){
          res.status(500).json(error);
     }
})


module.exports = router;