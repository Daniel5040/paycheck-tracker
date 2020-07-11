import { Router } from 'express'
import workDay from '../controllers/workDay'

const router = Router()

// Create new Work Day
router.post('/create', workDay.createWorkDay)

// Get list of Worked Days per peycheck
router.get('/daysworked/:id', workDay.getPaycheckWorkDays)

// Get specific Work Day
router.get('/workday/:id', workDay.getWorkDay)

// Update Work Day
router.put('/update/:id', workDay.updateWorkDay)

// Delete Work Day
router.delete('/delete/:id', workDay.deleteWorkDay)

export default router
