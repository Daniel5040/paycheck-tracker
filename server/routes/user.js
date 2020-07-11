import { Router } from 'express'
import user from '../controllers/user'
import { verifyToken } from '../middleware/validate-token'

const router = Router()

// Register new user
router.post('/register', user.register)

// Login user
router.post('/login', user.login)

// Update information
router.put('/update/info/:id', verifyToken, user.updateInfo)

// Update password
router.put('/update/password/:id', verifyToken, user.updatePassword)

// Get ID
router.get('/getInfo/:email', verifyToken, user.getInfo)

// Delete user
router.delete('/delete/:id', verifyToken, user.deleteUser)

export default router
