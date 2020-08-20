import { Router } from 'express'
import paycheck from '../controllers/paycheck'

const router = Router()

// Create new Paycheck
router.post('/create', paycheck.createPaycheck)

// Update paycheck date
router.put('/update/date/:id', paycheck.updateDate)

// Get list of Paychecks
router.get('/user/:id', paycheck.getPaychecks)

// Delete Paycheck
router.delete('/delete/:id', paycheck.deletePaycheck)

// Update Paycheck
router.put('/update/:id/:user', paycheck.updatePaycheck)

// Get specific Paycheck
router.get('/:id', paycheck.getPaycheck)

export default router
