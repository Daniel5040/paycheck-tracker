const separateWeeks = (workdays, paycheck) => {
  const weekMs = 604800000 // a week in milliseconds
  let weeks = []
  weeks.push([])
  let week = 0
  let startWeek = paycheck.start.getTime()
  let endWeek = paycheck.start.getTime() + weekMs
  for (let i = 0; i < workdays.length; i++) {
    // add workday into a week if within weeks boundaries
    if (workdays[i].start.getTime() >= startWeek && workdays[i].start.getTime() < endWeek) {
      weeks[week].push(workdays[i])
    }
    // create new week, push day into array, and update week boundaries
    else {
      weeks.push([])
      week++
      weeks[week].push(workdays[i])
      startWeek += weekMs
      endWeek += weekMs
    }
  }
  return weeks
}

const total = (workdays, weeks, body, user) => {
  let hourMultiplier = 0
  weeks.forEach((week) => {
    week.forEach((day) => {
      body.hours += day.hours
      body.credit += day.credit
      body.cash += day.cash
    })
    // check for overtime and calculate
    const hours = body.hours - 40 * hourMultiplier - body.overtime
    if (hours > 40) {
      body.overtime += hours - 40
    }
    hourMultiplier += 1
  })
  // add hourly and overtime rate and set number of days
  body.hours -= body.overtime
  body.credit += user.wage * (body.hours + 1.5 * body.overtime)
  body.days = workdays.length

  return body
}

export default { separateWeeks, total }
