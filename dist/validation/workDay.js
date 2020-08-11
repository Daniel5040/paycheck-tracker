"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createValidation = data => {
  var Schema = _joi.default.object({
    start: _joi.default.date().required(),
    end: _joi.default.date().required(),
    credit: _joi.default.number().min(0).required(),
    cash: _joi.default.number().min(0).required(),
    paycheck: _joi.default.string().required(),
    user: _joi.default.string().required()
  });

  return Schema.validate(data);
};

var updateValidation = data => {
  var Schema = _joi.default.object({
    start: _joi.default.date(),
    end: _joi.default.date(),
    credit: _joi.default.number().min(0),
    cash: _joi.default.number().min(0)
  });

  return Schema.validate(data);
};

var _default = {
  createValidation,
  updateValidation
};
exports.default = _default;