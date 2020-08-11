"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _paycheck = _interopRequireDefault(require("../models/paycheck"));

var _workDay = _interopRequireDefault(require("../models/workDay"));

var _user = _interopRequireDefault(require("../models/user"));

var _paycheck2 = _interopRequireDefault(require("../validation/paycheck"));

var _calculateTotal = _interopRequireDefault(require("../helper/calculateTotal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Get a list of paychecks
var getPaychecks = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    try {
      var paychecks = yield _paycheck.default.find({
        user: req.params.id
      }).sort({
        start: 'desc'
      });
      res.status(200).json(paychecks);
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  });

  return function getPaychecks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // Get individual paycheck


var getPaycheck = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    try {
      var paycheck = yield _paycheck.default.findById(req.params.id); // if no paycheck found

      if (!paycheck) return res.status(404).json({
        error: 'Paycheck not found'
      });
      res.status(200).json(paycheck);
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  });

  return function getPaycheck(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // Create new paycheck


var createPaycheck = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    // Validate req body
    var {
      error
    } = _paycheck2.default.createValidation(req.body);

    if (error) return res.status(400).json({
      error: error.details[0].message
    }); // check updated time is valid

    var start = new Date(req.body.start);
    var end = new Date(req.body.end);
    if (end.getTime() < start.getTime()) return res.status(400).json({
      error: 'Paycheck cannot end before it starts'
    });
    if (start.getTime() > end.getTime()) return res.status(400).json({
      error: 'Paycheck cannot start after it ends'
    }); // Create paycheck

    var paycheck = new _paycheck.default({
      start: req.body.start,
      end: req.body.end,
      days: 0,
      hours: 0,
      ovetime: 0,
      credit: 0,
      cash: 0,
      user: req.body.user,
      createdAt: new Date()
    }); // Save paycheck or send error

    try {
      var savedPaycheck = yield paycheck.save();
      res.status(200).json({
        error: null,
        data: savedPaycheck
      });
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  });

  return function createPaycheck(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); // Update paycheck date


var updateDate = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    // Validate req body
    var {
      error
    } = _paycheck2.default.updateDate(req.body);

    if (error) return res.status(400).json({
      error: error.details[0].message
    }); // update info

    var body = {
      start: req.body.start,
      end: req.body.end
    }; // check updated time is valid

    var start = new Date(req.body.start);
    var end = new Date(req.body.end);
    if (end.getTime() < start.getTime()) return res.status(400).json({
      error: 'Paycheck cannot end before it starts'
    });
    if (start.getTime() > end.getTime()) return res.status(400).json({
      error: 'Paycheck cannot start after it ends'
    });

    try {
      yield _paycheck.default.findByIdAndUpdate(req.params.id, body);
      res.status(200).json({
        error: null,
        message: 'Paycheck date updated'
      });
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  });

  return function updateDate(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); // Update paycheck


var updatePaycheck = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res) {
    // variable to change info
    var body = {
      days: 0,
      hours: 0,
      overtime: 0,
      credit: 0,
      cash: 0
    }; // Get user

    var user = yield _user.default.findById(req.params.user);
    if (!user) return res.status(404).json({
      error: 'User not found'
    }); // Get paycheck

    var paycheck = yield _paycheck.default.findById(req.params.id);
    if (!paycheck) return res.status(404).json({
      error: 'Paycheck not found'
    }); // Get list of workdays

    var workdays = yield _workDay.default.find({
      paycheck: req.params.id
    }); // Separate paycheck into weeks

    var weeks = _calculateTotal.default.separateWeeks(workdays, paycheck); // calculate total for each week


    body = _calculateTotal.default.total(workdays, weeks, body, user); // Update paycheck or send error

    try {
      yield _paycheck.default.findByIdAndUpdate(req.params.id, body);
      res.status(200).json({
        error: null,
        message: 'Paycheck updated'
      });
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  });

  return function updatePaycheck(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); // Delete paycheck


var deletePaycheck = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(function* (req, res) {
    try {
      // Delete all workdays associated with paycheck
      var workdays = yield _workDay.default.find({
        paycheck: req.params.id
      });
      workdays.forEach( /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator(function* (workday) {
          yield _workDay.default.findByIdAndRemove(workday._id);
        });

        return function (_x13) {
          return _ref7.apply(this, arguments);
        };
      }());
      yield _paycheck.default.findByIdAndRemove(req.params.id);
      res.status(200).json({
        error: null,
        message: 'Paycheck deleted'
      });
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  });

  return function deletePaycheck(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

var _default = {
  getPaychecks,
  getPaycheck,
  createPaycheck,
  updateDate,
  updatePaycheck,
  deletePaycheck
};
exports.default = _default;