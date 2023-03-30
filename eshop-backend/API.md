
### install empty package.json
npm init -y 

### Packages installation
* Express
* Mongoose
* dotenv
* nodemon

### initlize our express server
const express = require('express');
const app = express();

app.get('/', (req,res) =>{
     res.send("Sucessfully listen")
})

app.listen(3000, console.log("you listen at port 3000"))


### set up our DB
const mongoose = require('mongoose');

then make Cluster on MongoDb website

the add url with mongoose

mongoose.connect(process.env.MONGO_URL )
.then( () => console.log("Scessfully Connect") )
.catch( (error) => console.log(`You have some ${error}`)  )


### include Router

const router = require('express').Router() ;

router.get('/users', (req,res) =>{
     res.send('User List')
})

module.exports = router;

### then at main index.js 

const route = require('./routes/users')

app.use('/api/', route)
