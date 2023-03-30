const router = require('express').Router();
const User = require('../models/Users')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

// ============= register ==================
router.post('/register', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    isAdmin: req.body.isAdmin,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET).toString()

  })
  try {
    const addUser = await newUser.save();
    res.status(201).json(addUser);
  } catch (err) {
    res.status(500).json(err);
  }
});


// =========== login =================
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const decryptedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET).toString(CryptoJS.enc.Utf8);
    if (req.body.password !== decryptedPassword) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    //here should user log successfully we will use JWT
    const accessToken = jwt.sign({
      id: user._id,
      isAdmin: user.isAdmin
    }, process.env.ACCESS_TOKEN_SECRET_KEY, { expiresIn: "3d" })

    //hide password when response by only render all except password
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router;


//for security reasons its better to register and log at different file

