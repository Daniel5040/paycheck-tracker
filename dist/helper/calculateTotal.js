"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var separateWeeks = (workdays, paycheck) => {
  var weekMs = 604800000; // a week in milliseconds

  var weeks = [];
  weeks.push([]);
  var week = 0;
  var startWeek = paycheck.start.getTime();
  var endWeek = paycheck.start.getTime() + weekMs;

  for (var i = 0; i < workdays.length; i++) {
    // add workday into a week if within weeks boundaries
    if (workdays[i].start.getTime() >= startWeek && workdays[i].start.getTime() < endWeek) {
      weeks[week].push(workdays[i]);
    } // create new week, push day into array, and update week boundaries
    else {
        weeks.push([]);
        week++;
        weeks[week].push(workdays[i]);
        startWeek += weekMs;
        endWeek += weekMs;
      }
  }

  return weeks;
};

var total = (workdays, weeks, body, user) => {
  var hourMultiplier = 0;
  weeks.forEach(week => {
    week.forEach(day => {
      body.hours += day.hours;
      body.credit += day.credit;
      body.cash += day.cash;
    }); // check for overtime and calculate

    var hours = body.hours - 40 * hourMultiplier - body.overtime;

    if (hours > 40) {
      body.overtime += hours - 40;
    }

    hourMultiplier += 1;
  }); // add hourly and overtime rate and set number of days

  body.hours -= body.overtime;
  body.credit += user.wage * (body.hours + 1.5 * body.overtime);
  body.days = workdays.length;
  return body;
};

var _default = {
  separateWeeks,
  total
};
exports.default = _default;