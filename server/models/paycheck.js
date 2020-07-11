import mongoose from 'mongoose'

const paycheckSchema = new mongoose.Schema({
  active: { type: Boolean, required: true, default: false },
  'days-worked': { type: Number, required: true, default: 0 },
  credit: { type: Number, required: true, default: 0 },
  cash: { type: Number, required: true, default: 0 },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
})

export default mongoose.model('Paycheck', paycheckSchema)
