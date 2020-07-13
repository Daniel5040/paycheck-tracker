import Paycheck from '../models/paycheck'
import WorkDay from '../models/workDay'
import User from '../models/user'
import validate from '../validation/paycheck'

// Get a list of paychecks
const getPaychecks = async (req, res) => {
  try {
    const paychecks = await Paycheck.find({ user: req.params.id })

    // If no paychecks found
    if (!paychecks.length) return res.status(404).json({ error: 'No paychecks found' })

    res.status(200).json(paychecks)
  } catch (error) {
    res.status(400).json({ error })
  }
}

// Get individual paycheck
const getPaycheck = async (req, res) => {
  try {
    const paycheck = await Paycheck.findById(req.params.id)

    // if no paycheck found
    if (!paycheck) return res.status(404).json({ error: 'Paycheck not found' })

    res.status(200).json(paycheck)
  } catch (error) {
    res.status(400).json({ error })
  }
}

// Create new paycheck
const createPaycheck = async (req, res) => {
  // Create paycheck
  const paycheck = new Paycheck({
    active: true,
    days: 0,
    hours: 0,
    ovetime: 0,
    credit: 0,
    cash: 0,
    user: req.body.user,
    createdAt: new Date(),
  })

  // Save paycheck or send error
  try {
    const savedPaycheck = await paycheck.save()
    res.status(200).json({ error: null, data: savedPaycheck })
  } catch (error) {
    res.status(400).json({ error })
  }
}

// Update paycheck
const updatePaycheck = async (req, res) => {
  // variable to change info
  let body = {
    days: 0,
    hours: 0,
    overtime: 0,
    credit: 0,
    cash: 0,
  }

  // Get user
  const user = await User.findById(req.params.user)
  if (!user) return res.status(404).json({ error: 'User not found' })

  // Get list of workdays
  const workdays = await WorkDay.find({ paycheck: req.params.id })
  if (workdays) {
    // update the amount of each member
    workdays.forEach((workday) => {
      // body.hours += workday.hours
      body.hours += 5.5
      body.credit += workday.credit
      body.cash += workday.cash
    })
    // Check for overtime
    if (body.hours > 80) {
      body.overtime = body.hours - 80
      body.hours = 80
    }

    // Add hourly and overtime rate and set number of days
    body.credit += user.wage * body.hours + user.wage * 1.5 * body.overtime
    body.days = workdays.length
  }

  // Update paycheck or send error
  try {
    await Paycheck.findByIdAndUpdate(req.params.id, body)
    res.status(200).json({ error: null, message: 'Paycheck updated' })
  } catch (error) {
    res.status(400).json({ error })
  }
}

// Close paycheck
const closePaycheck = async (req, res) => {
  // Validate req body
  const { error } = validate.closeValidation(req.body)
  if (error) return res.status(400).json({ error: error.details[0].messages })

  // Close paycheck or send error
  try {
    await Paycheck.findByIdAndUpdate(req.params.id, { active: req.body.active })
    res.status(200).json({ error: null, messages: 'Paycheck closed' })
  } catch (error) {
    res.status(400).json({ error })
  }
}

// Delete paycheck
const deletePaycheck = async (req, res) => {
  try {
    await Paycheck.findByIdAndRemove(req.params.id)
    res.status(200).json({ error: null, message: 'Paycheck deleted' })
  } catch (error) {
    res.status(400).json({ error })
  }
}

export default {
  getPaychecks,
  getPaycheck,
  createPaycheck,
  updatePaycheck,
  closePaycheck,
  deletePaycheck,
}
