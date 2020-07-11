import WorkDay from '../models/workDay'
import Paycheck from '../models/paycheck'
import validate from '../validation/workDay'

// Get a list of workdays for a paycheck
const getPaycheckWorkDays = async (req, res) => {
  try {
    const workdays = await WorkDay.find({ paycheck: req.params.paycheckId })

    // If no workdays found
    if (!workdays) return res.status(404).json({ error: 'No workdays found' })

    return res.status(200).json({ workdays })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

// Get individual workday
const getWorkDay = async (req, res) => {
  try {
    const workday = await WorkDay.findById(req.params.workdayId)

    // If no workday found
    if (!workday) return res.status(404).json({ error: 'Workday not found' })

    return res.status(200).json({ workday })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

// Create new workday
const createWorkDay = async (req, res) => {
  // Validate req body
  const { error } = validate.createValidation(req.body)
  if (error) return res.status(400).json({ error: error.details[0].message })

  // Create workday
  const workday = new WorkDay({
    hours: req.body.hours,
    minutes: req.body.minutes,
    credit: req.body.credit,
    cash: req.body.cash,
    paycheck: req.body.paycheck,
    user: req.body.user,
  })

  // save user or send error
  try {
    const savedWorkDay = await workday.save()
    res.status(200).json({ error: null, data: savedWorkDay })
  } catch (error) {
    res.status(400).json({ error })
  }
}

// Update workday
const updateWorkDay = async (req, res) => {
  // Validate req body
  const { error } = validate.updateValidation(req.body)
  if (error) return res.status(400).json({ error: error.details[0].message })

  // update info
  const body = {
    hours: req.body.hours,
    minutes: req.body.minutes,
    credit: req.body.credit,
    cash: req.body.cash,
  }

  // Update workday or send error
  try {
    const updatedWorkDay = await WorkDay.findByIdAndUpdate(req.params.id, body)
    res.status(200).json({ error: null, data: updatedWorkDay })
  } catch (error) {
    res.status(400).json({ error })
  }
}

// Delete workday
const deleteWorkDay = async (req, res) => {
  try {
    const deleteWorkDay = await WorkDay.findOneAndRemove(req.params.id)
    res.status(200).json({ error: null, message: 'Work Day deleted', data: deleteWorkDay })
  } catch (error) {
    res.status(400).json({ error })
  }
}

export default { getPaycheckWorkDays, getWorkDay, createWorkDay, updateWorkDay, deleteWorkDay }
