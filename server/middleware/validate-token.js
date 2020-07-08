import jwt from 'jsonwebtoken'

// Middleware to validate token
const verifyToken = (req, res, next) => {
  const token = req.header('user-token')
  if (!token) return res.status(401).json({ error: 'Access denied' })

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET)
    req.user = verified
    next() // To continue the flow
  } catch (error) {
    res.status(400).json({ error: 'Token is not valid' })
  }
}

export { verifyToken }
