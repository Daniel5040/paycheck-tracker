import { Router } from 'express'
import workDay from '../controllers/workDay'

const router = Router()

// Create new Work Day
router.post('/create', workDay.createWorkDay)

// Get list of Worked Days per peycheck
router.get('/paycheck/:id', workDay.getPaycheckWorkDays)

// Update Work Day
router.put('/update/:id', workDay.updateWorkDay)

// Delete Work Day
router.delete('/delete/:id', workDay.deleteWorkDay)

// Get specific Work Day
router.get('/:id', workDay.getWorkDay)

export default router
