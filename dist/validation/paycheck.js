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
    user: _joi.default.string().required()
  });

  return Schema.validate(data);
};

var updateDate = data => {
  var Schema = _joi.default.object({
    start: _joi.default.date(),
    end: _joi.default.date()
  });

  return Schema.validate(data);
};

var _default = {
  createValidation,
  updateDate
};
exports.default = _default;