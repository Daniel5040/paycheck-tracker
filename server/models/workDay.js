import mongoose from 'mongoose'

const workDaySchema = new mongoose.Schema({
  hours: { type: Number, required: true, default: 0 },
  minutes: { type: Number, required: true, default: 0 },
  credit: { type: Number, required: true, default: 0 },
  cash: { type: Number, required: true, default: 0 },
  paycheck: { type: mongoose.Schema.Types.ObjectId, ref: 'Paycheck' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
})

export default mongoose.model('WorkDay', workDaySchema)
