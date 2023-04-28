const jwt = require('jsonwebtoken')

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Unauthorized' })
  }

  const token = authHeader.split(' ')[1]

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err)
      return res.status(403).json({ success: false, message: 'Forbidden' })
    req.user = decoded.UserInfo.username
    req.role = decoded.UserInfo.roles
    req.name = decoded.UserInfo.name
    next()
  })
}

module.exports = verifyJWT
