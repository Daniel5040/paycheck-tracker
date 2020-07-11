import Paycheck from '../models/paycheck'
import validate from '../validation/paycheck'

// Get a list of paychecks
const getPaychecks = async (req, res) => {
  try {
    const paychecks = await Paycheck.find({ user: req.params.id })

    // If no paychecks found
    if (!paychecks) return res.status(404).json({ error: 'No paychecks found' })

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
    'days-worked': 0,
    credit: 0,
    cash: 0,
    user: req.body.user,
  })

  // Save paycheck or send error
  try {
    const savedPaycheck = await paycheck.save()
    res.status(200).json({ error: null, data: savedPaycheck })
  } catch (error) {
    res.status(400).json({ error })
  }
}

// UPdate paycheck
const updatePaycheck = async (req, res) => {
  // Validate req body
  const { error } = validate.updateValidation(req.body)
  if (error) return res.status(400).json({ error: error.details[0].message })

  // Update info
  const body = {
    active: req.body.active,
    'days-worked': req.body.days,
    credit: req.body.credit,
    cash: req.body.cash,
  }

  // Update paycheck or send error
  try {
    await Paycheck.findByIdAndUpdate(req.params.id, body)
    res.status(200).json({ error: null, message: 'Paycheck updated' })
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

export default { getPaychecks, getPaycheck, createPaycheck, updatePaycheck, deletePaycheck }
