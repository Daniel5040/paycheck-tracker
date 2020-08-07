"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _workDay = _interopRequireDefault(require("../controllers/workDay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)(); // Create new Work Day

router.post('/create', _workDay.default.createWorkDay); // Get list of Worked Days per peycheck

router.get('/paycheck/:id', _workDay.default.getPaycheckWorkDays); // Update Work Day

router.put('/update/:id', _workDay.default.updateWorkDay); // Delete Work Day

router.delete('/delete/:id', _workDay.default.deleteWorkDay); // Get specific Work Day

router.get('/:id', _workDay.default.getWorkDay);
var _default = router;
exports.default = _default;