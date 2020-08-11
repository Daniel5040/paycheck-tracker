"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _user = _interopRequireDefault(require("./user"));

var _workDay = _interopRequireDefault(require("./workDay"));

var _paycheck = _interopRequireDefault(require("./paycheck"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  userRoutes: _user.default,
  workDayRoutes: _workDay.default,
  paycheckRoutes: _paycheck.default
};
exports.default = _default;