"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var workDaySchema = new _mongoose.default.Schema({
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  credit: {
    type: Number,
    required: true,
    default: 0
  },
  cash: {
    type: Number,
    required: true,
    default: 0
  },
  paycheck: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'Paycheck'
  },
  user: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: Date
});
workDaySchema.virtual('hours').get(function () {
  var ms = this.end - this.start;
  var seconds = ms / 1000;
  var hours = parseInt(seconds / 3600);
  seconds = seconds % 3600;
  var minutes = parseInt(seconds / 60) / 60;
  return hours + minutes;
});

var _default = _mongoose.default.model('WorkDay', workDaySchema);

exports.default = _default;