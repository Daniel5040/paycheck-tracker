import mongoose from 'mongoose'

const paycheckSchema = new mongoose.Schema({
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  days: { type: Number, required: true, default: 0 },
  hours: { type: Number, required: true, default: 0 },
  overtime: { type: Number, required: true, default: 0 },
  credit: { type: Number, required: true, default: 0 },
  cash: { type: Number, required: true, default: 0 },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: Date,
})

export default mongoose.model('Paycheck', paycheckSchema)
