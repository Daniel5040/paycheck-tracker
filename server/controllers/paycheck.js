import Paycheck from '../models/paycheck'
import WorkDay from '../models/workDay'
import User from '../models/user'
import validate from '../validation/paycheck'
import helper from '../helper/calculateTotal'

// Get a list of paychecks
const getPaychecks = async (req, res) => {
  try {
    const paychecks = await Paycheck.find({ user: req.params.id }).sort({ start: 'desc' })

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
  // Validate req body
  const { error } = validate.createValidation(req.body)
  if (error) return res.status(400).json({ error: error.details[0].message })

  // check updated time is valid
  if (req.body.end.getTime() < req.body.start.getTime()) return res.status(400).json({ error: 'Paycheck cannot end before it starts' })
  if (req.body.start.getTime() > req.body.end.getTime()) return res.status(400).json({ error: 'Paycheck cannot start after it ends' })

  // Create paycheck
  const paycheck = new Paycheck({
    start: req.body.start,
    end: req.body.end,
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

// Update paycheck date
const updateDate = async (req, res) => {
  // Validate req body
  const { error } = validate.updateDate(req.body)
  if (error) return res.status(400).json({ error: error.details[0].message })

  // update info
  const body = {
    start: req.body.start,
    end: req.body.end,
  }

  // check updated time is valid
  if (body.end.getTime() < body.start.getTime()) return res.status(400).json({ error: 'Paycheck cannot end before it starts' })
  if (body.start.getTime() > body.end.getTime()) return res.status(400).json({ error: 'Paycheck cannot start after it ends' })

  try {
    await Paycheck.findByIdAndUpdate(req.params.id, body)
    res.status(200).json({ error: null, message: 'Paycheck date updated' })
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
  // Get paycheck
  const paycheck = await Paycheck.findById(req.params.id)
  if (!paycheck) return res.status(404).json({ error: 'Paycheck not found' })

  // Get list of workdays
  const workdays = await WorkDay.find({ paycheck: req.params.id })
  if (workdays.length) {
    // Separate paycheck into weeks
    const weeks = helper.separateWeeks(workdays, paycheck)
    // calculate total for each week
    body = helper.total(workdays, weeks, body, user)

    // Update paycheck or send error
    try {
      await Paycheck.findByIdAndUpdate(req.params.id, body)
      res.status(200).json({ error: null, message: 'Paycheck updated' })
    } catch (error) {
      res.status(400).json({ error })
    }
  } else {
    res.status(404).json({ error: 'No workdays found' })
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
  updateDate,
  updatePaycheck,
  deletePaycheck,
}
