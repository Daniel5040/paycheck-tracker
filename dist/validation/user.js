"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registerValidation = data => {
  var Schema = _joi.default.object({
    name: _joi.default.string().alphanum().required(),
    email: _joi.default.string().email({
      minDomainSegments: 2,
      tlds: {
        allow: ['com', 'net']
      }
    }),
    password: _joi.default.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repeat_password: _joi.default.ref('password'),
    wage: _joi.default.number().required()
  });

  return Schema.validate(data);
};

var loginValidation = data => {
  var Schema = _joi.default.object({
    email: _joi.default.string().email().required(),
    password: _joi.default.string().required()
  });

  return Schema.validate(data);
};

var updateInfoValidation = data => {
  var Schema = _joi.default.object({
    name: _joi.default.string().alphanum().required(),
    password: _joi.default.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repeat_password: _joi.default.ref('password'),
    wage: _joi.default.number().required()
  });

  return Schema.validate(data);
};

var updatePasswordValidation = data => {
  var Schema = _joi.default.object({
    password: _joi.default.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repeat_password: _joi.default.ref('password')
  });

  return Schema.validate(data);
};

var _default = {
  registerValidation,
  loginValidation,
  updateInfoValidation,
  updatePasswordValidation
};
exports.default = _default;