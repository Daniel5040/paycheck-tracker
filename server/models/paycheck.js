import mongoose from 'mongoose'

const paycheckSchema = new mongoose.Schema({
  active: { type: Boolean, required: true, default: true },
  'days-worked': { type: Number, required: true, default: 0 },
  credit: { type: Number, required: true, default: 0 },
  cash: { type: Number, required: true, default: 0 },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: Date,
})

export default mongoose.model('Paycheck', paycheckSchema)
