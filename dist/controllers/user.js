"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("dotenv/config");

var _user = _interopRequireDefault(require("../models/user"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _user2 = _interopRequireDefault(require("../validation/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getInfo = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    try {
      var user = yield _user.default.findOne({
        email: req.params.email
      });
      return res.status(200).json({
        id: user._id,
        name: user.name,
        wage: user.wage
      });
    } catch (error) {
      return res.status(400).json({
        error
      });
    }
  });

  return function getInfo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // Register new user


var register = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    // Validate the user
    var {
      error
    } = _user2.default.registerValidation(req.body);

    if (error) return res.status(400).json({
      error: error.details[0].message
    }); // Check if email already registered

    var isEmailExist = yield _user.default.findOne({
      email: req.body.email
    });
    if (isEmailExist) return res.status(400).json({
      error: 'Email already registered'
    }); // Hash password

    var salt = yield _bcrypt.default.genSalt(10);
    var password = yield _bcrypt.default.hash(req.body.password, salt); // Create user

    var user = new _user.default({
      name: req.body.name,
      email: req.body.email,
      password,
      wage: req.body.wage,
      createdAt: new Date()
    });

    try {
      var savedUser = yield user.save();
      res.status(200).json({
        error: null,
        data: savedUser
      });
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  });

  return function register(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // Login user


var login = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    // Validate the user
    var {
      error
    } = _user2.default.loginValidation(req.body);

    if (error) return res.status(400).json({
      error: error.details[0].message
    });
    var user = yield _user.default.findOne({
      email: req.body.email
    }); // Error if invalid email

    if (!user) return res.status(401).json({
      error: 'Wrong email or password'
    }); // Check password

    var validPassword = yield _bcrypt.default.compare(req.body.password, user.password);
    if (!validPassword) return res.status(401).json({
      error: 'Wrong email or password'
    }); // Create token

    var token = _jsonwebtoken.default.sign( // payload data
    {
      name: user.name,
      id: user._id
    }, process.env.TOKEN_SECRET);

    res.header('user-token', token).json({
      error: null,
      message: 'Successful login',
      data: {
        token
      }
    });
  });

  return function login(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); // Update information


var updateInfo = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    // Validate user
    var {
      error
    } = _user2.default.updateInfoValidation(req.body);

    if (error) return res.status(400).json({
      error: error.details[0].message
    });
    var user = yield _user.default.findById(req.params.id);
    if (!user) res.status(400).json({
      error: 'User not found'
    }); // Check password

    var validPassword = yield _bcrypt.default.compare(req.body.password, user.password);
    if (!validPassword) return res.status(401).json({
      error: 'Invalid password'
    });

    try {
      var updatedUser = yield _user.default.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        wage: req.body.wage
      });
      res.status(200).json({
        error: null,
        data: updatedUser
      });
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  });

  return function updateInfo(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); // Update password


var updatePassword = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res) {
    // Validate user
    var {
      error
    } = _user2.default.updatePasswordValidation(req.body);

    if (error) return res.status(400).json({
      error: error.details[0].message
    });
    var user = yield _user.default.findById(req.params.id);
    if (!user) res.status(400).json({
      error: 'User not found'
    }); // Hash password

    var salt = yield _bcrypt.default.genSalt(10);
    var password = yield _bcrypt.default.hash(req.body.password, salt);

    try {
      var updatedUser = yield _user.default.findByIdAndUpdate(req.params.id, {
        password: password
      });
      res.status(200).json({
        error: null,
        data: updatedUser
      });
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  });

  return function updatePassword(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); // Delete user


var deleteUser = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(function* (req, res) {
    try {
      var _deleteUser = yield _user.default.findByIdAndRemove(req.params.id);

      res.status(200).json({
        error: null,
        message: 'User deleted',
        data: _deleteUser
      });
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  });

  return function deleteUser(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

var _default = {
  getInfo,
  register,
  login,
  updateInfo,
  updatePassword,
  deleteUser
};
exports.default = _default;