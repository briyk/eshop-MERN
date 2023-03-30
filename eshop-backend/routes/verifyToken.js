const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
     const authHeader = req.headers.token
     if (authHeader) {
          const token = authHeader.split(" ")[1]
          // verify token
          jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, user) => {
               // after checking
               if (err) {
                    return res.status(403).json('Token is not valid')
               }
               req.user = user
               next() // end request
          })
     } else {
          return res.status(401).json('you are not authenticated')
     }
}

const verifyAuthorization = (req, res, next) => {
     verifyToken(req, res, () => {
          if (req.user.id === req.params.id || req.user.isAdmin) {
               next()
          } else {
               return res.status(403).json('you are not allowed')
          }
     })
}
const verifyAdmin = (req, res, next) => {
     verifyToken(req, res, () => {
          if (req.user.isAdmin) {
               next()
          } else {
               return res.status(403).json('you are not allowed')
          }
     })
}

module.exports = { verifyToken, verifyAuthorization, verifyAdmin }
