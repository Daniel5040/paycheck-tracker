import mongoose from 'mongoose'

const workDaySchema = new mongoose.Schema({
  'start-shift': { type: Date, required: true },
  'end-shift': { type: Date },
  hours: { type: Number, default: 0 },
  minutes: { type: Number, default: 0 },
  credit: { type: Number, required: true, default: 0 },
  cash: { type: Number, default: 0 },
  paycheck: { type: mongoose.Schema.Types.ObjectId, ref: 'Paycheck' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
})

workDaySchema
  .virtual('hoursWorked')
  .get(function () {
    return `${this.hours}:${this.minutes}`
  })
  .set(function (ms) {
    let seconds = ms / 1000

    const hours = parseInt(seconds / 3600)
    seconds = seconds % 3600
    const minutes = parseInt(seconds / 60)
    this.set({ hours, minutes })
  })

export default mongoose.model('WorkDay', workDaySchema)
