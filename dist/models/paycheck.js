"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var paycheckSchema = new _mongoose.default.Schema({
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  days: {
    type: Number,
    required: true,
    default: 0
  },
  hours: {
    type: Number,
    required: true,
    default: 0
  },
  overtime: {
    type: Number,
    required: true,
    default: 0
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
  user: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: Date
});

var _default = _mongoose.default.model('Paycheck', paycheckSchema);

exports.default = _default;