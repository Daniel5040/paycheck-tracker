import 'dotenv/config'
import User from '../models/user'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import validate from '../validation/user'

const getInfo = async (req, res) => {
  const user = await User.findOne({ email: req.params.email })

  return res.status(200).json({
    id: user._id,
    name: user.name,
    wage: user.wage,
  })
}

// Register new user
const register = async (req, res) => {
  // Validate the user
  const { error } = validate.registerValidation(req.body)
  if (error) return res.status(400).json({ error: error.details[0].message })

  // Check if email already registered
  const isEmailExist = await User.findOne({ email: req.body.email })
  if (isEmailExist) return res.status(400).json({ error: 'Email already registered' })

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const password = await bcrypt.hash(req.body.password, salt)

  // Create user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password,
    wage: req.body.wage,
    createdAt: new Date(),
  })

  try {
    const savedUser = await user.save()
    res.status(200).json({ error: null, data: savedUser })
  } catch (error) {
    res.status(400).json({ error })
  }
}

// Login user
const login = async (req, res) => {
  // Validate the user
  const { error } = validate.loginValidation(req.body)
  if (error) return res.status(400).json({ error: error.details[0].message })

  const user = await User.findOne({ email: req.body.email })

  // Error if invalid email
  if (!user) return res.status(401).json({ error: 'Wrong email or password' })

  // Check password
  const validPassword = await bcrypt.compare(req.body.password, user.password)
  if (!validPassword) return res.status(401).json({ error: 'Wrong email or password' })

  // Create token
  const token = jwt.sign(
    // payload data
    {
      name: user.name,
      id: user._id,
    },
    process.env.TOKEN_SECRET
  )

  res.header('user-token', token).json({
    error: null,
    message: 'Successful login',
    data: {
      token,
    },
  })
}

// Update information
const updateInfo = async (req, res) => {
  // Validate user
  const { error } = validate.updateInfoValidation(req.body)
  if (error) return res.status(400).json({ error: error.details[0].message })

  const user = await User.findById(req.params.id)
  if (!user) res.status(400).json({ error: 'User not found' })

  // Check password
  const validPassword = await bcrypt.compare(req.body.password, user.password)
  if (!validPassword) return res.status(401).json({ error: 'Invalid password' })

  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      wage: req.body.wage,
    })
    res.status(200).json({ error: null, data: updatedUser })
  } catch (error) {
    res.status(400).json({ error })
  }
}

// Update password
const updatePassword = async (req, res) => {
  // Validate user
  const { error } = validate.updatePasswordValidation(req.body)
  if (error) return res.status(400).json({ error: error.details[0].message })

  const user = await User.findById(req.params.id)
  if (!user) res.status(400).json({ error: 'User not found' })

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const password = await bcrypt.hash(req.body.password, salt)

  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, { password: password })
    res.status(200).json({ error: null, data: updatedUser })
  } catch (error) {
    res.status(400).json({ error })
  }
}

// Delete user
const deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndRemove(req.params.id)
    res.status(200).json({ error: null, message: 'User deleted', data: deleteUser })
  } catch (error) {
    res.status(400).json({ error })
  }
}

export default {
  getInfo,
  register,
  login,
  updateInfo,
  updatePassword,
  deleteUser,
}
