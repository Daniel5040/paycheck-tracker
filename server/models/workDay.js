import mongoose from 'mongoose'

const workDaySchema = new mongoose.Schema({
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  credit: { type: Number, required: true, default: 0 },
  cash: { type: Number, required: true, default: 0 },
  paycheck: { type: mongoose.Schema.Types.ObjectId, ref: 'Paycheck' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: Date,
})

workDaySchema.virtual('hours').get(function () {
  const ms = this.end - this.start
  let seconds = ms / 1000
  const hours = parseInt(seconds / 3600)
  seconds = seconds % 3600
  const minutes = parseInt(seconds / 60) / 60

  return hours + minutes
})

export default mongoose.model('WorkDay', workDaySchema)
