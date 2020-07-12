import WorkDay from '../models/workDay'
import validate from '../validation/workDay'

// Get a list of workdays for a paycheck
const getPaycheckWorkDays = async (req, res) => {
  try {
    const workdays = await WorkDay.find({ paycheck: req.params.id })

    // If no workdays found
    if (!workdays.length) return res.status(404).json({ error: 'No workdays found' })

    res.status(200).json(workdays)
  } catch (error) {
    res.status(400).json({ error })
  }
}

// Get individual workday
const getWorkDay = async (req, res) => {
  try {
    const workday = await WorkDay.findById(req.params.id)

    // If no workday found
    if (!workday) return res.status(404).json({ error: 'Workday not found' })

    res.status(200).json(workday)
  } catch (error) {
    res.status(400).json({ error })
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
    createdAt: new Date(),
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
    await WorkDay.findByIdAndUpdate(req.params.id, body)
    res.status(200).json({ error: null, message: 'Work Day updated' })
  } catch (error) {
    res.status(400).json({ error })
  }
}

// Delete workday
const deleteWorkDay = async (req, res) => {
  try {
    await WorkDay.findByIdAndRemove(req.params.id)
    res.status(200).json({ error: null, message: 'Work Day deleted' })
  } catch (error) {
    res.status(400).json({ error })
  }
}

export default {
  getPaycheckWorkDays,
  getWorkDay,
  createWorkDay,
  updateWorkDay,
  deleteWorkDay,
}
