"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _workDay = _interopRequireDefault(require("../models/workDay"));

var _paycheck = _interopRequireDefault(require("../models/paycheck"));

var _workDay2 = _interopRequireDefault(require("../validation/workDay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Get a list of workdays for a paycheck
var getPaycheckWorkDays = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    try {
      // find workdays
      var workdays = yield _workDay.default.find({
        paycheck: req.params.id
      }).sort({
        start: 'desc'
      });
      res.status(200).json(workdays);
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  });

  return function getPaycheckWorkDays(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // Get individual workday


var getWorkDay = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    try {
      // find workdays
      var workday = yield _workDay.default.findById(req.params.id);
      if (!workday) return res.status(404).json({
        error: 'Workday not found'
      });
      res.status(200).json(workday);
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  });

  return function getWorkDay(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // Create new workday


var createWorkDay = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    // Validate req body
    var {
      error
    } = _workDay2.default.createValidation(req.body);

    if (error) return res.status(400).json({
      error: error.details[0].message
    }); // Find paycheck

    var paycheck = yield _paycheck.default.findById(req.body.paycheck);
    if (!paycheck) return res.status(404).json({
      error: 'Paycheck not found'
    }); // Check that workday is within paycheck time

    var start = new Date(req.body.start);
    var end = new Date(req.body.end);
    if (end.getTime() < start.getTime()) return res.status(400).json({
      error: 'Workday cannot end before it starts'
    });
    if (start.getTime() > end.getTime()) return res.status(400).json({
      error: 'Workday cannot start after it ends'
    });
    if (start.getTime() < paycheck.start.getTime() || start.getTime() > paycheck.end.getTime()) return res.status(400).json({
      error: 'Cannot pick this date'
    }); // Create workday

    var workday = new _workDay.default({
      start: req.body.start,
      end: req.body.end,
      credit: req.body.credit,
      cash: req.body.cash,
      paycheck: req.body.paycheck,
      user: req.body.user,
      createdAt: new Date()
    });

    try {
      var savedWorkDay = yield workday.save();
      res.status(200).json({
        error: null,
        data: savedWorkDay
      });
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  });

  return function createWorkDay(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); // Update workday


var updateWorkDay = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    // Validate req body
    var {
      error
    } = _workDay2.default.updateValidation(req.body);

    if (error) return res.status(400).json({
      error: error.details[0].message
    }); // Find paycheck

    var paycheck = yield _paycheck.default.findById(req.body.paycheck);
    if (!paycheck) return res.status(404).json({
      error: 'Paycheck not found'
    }); // Check that workday is within paycheck time

    var start = new Date(req.body.start);
    var end = new Date(req.body.end);
    if (end.getTime() < start.getTime()) return res.status(400).json({
      error: 'Workday cannot end before it starts'
    });
    if (start.getTime() > end.getTime()) return res.status(400).json({
      error: 'Workday cannot start after it ends'
    });
    if (start.getTime() < paycheck.start.getTime() || start.getTime() > paycheck.end.getTime()) return res.status(400).json({
      error: 'Cannot pick this date'
    }); // update info

    var body = {
      start: req.body.start,
      end: req.body.end,
      credit: req.body.credit,
      cash: req.body.cash
    };

    try {
      yield _workDay.default.findByIdAndUpdate(req.params.id, body);
      res.status(200).json({
        error: null,
        message: 'Work Day updated'
      });
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  });

  return function updateWorkDay(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); // Delete workday


var deleteWorkDay = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res) {
    try {
      yield _workDay.default.findByIdAndRemove(req.params.id);
      res.status(200).json({
        error: null,
        message: 'Work Day deleted'
      });
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  });

  return function deleteWorkDay(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var _default = {
  getPaycheckWorkDays,
  getWorkDay,
  createWorkDay,
  updateWorkDay,
  deleteWorkDay
};
exports.default = _default;