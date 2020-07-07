import { Router } from 'express'
import * as auth from '../controllers.auth'

const router = Router()

// Register new user
router.post('/register', auth.register)

// Login user
router.post('/login', auth.login)

// Update information
router.put('/update/:id', auth.update)

// Delete user
router.delete('/delete/:id', auth.deleteUser)

export default router
