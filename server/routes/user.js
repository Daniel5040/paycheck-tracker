import { Router } from 'express'
import * as user from '../controllers/user'

const router = Router()

// Register new user
router.post('/register', user.register)

// Login user
router.post('/login', user.login)

// Get ID
router.get('/getId/:email', user.getId)

// Update information
router.put('/update/:id', user.update)

// Delete user
router.delete('/delete/:id', user.deleteUser)

export default router
