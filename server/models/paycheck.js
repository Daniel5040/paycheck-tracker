import mongoose from 'mongoose'

const paycheckSchema = new mongoose.Schema({
  'start-date': { type: Date, required: true },
  'end-date': { type: Date },
  'days-worked': { type: Number, required: true, default: 0 },
  credit: { type: Number, required: true, default: 0 },
  cash: { type: Number, default: 0 },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
})

export default mongoose.model('Paycheck', paycheckSchema)
