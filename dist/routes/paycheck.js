"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _paycheck = _interopRequireDefault(require("../controllers/paycheck"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)(); // Create new Paycheck

router.post('/create', _paycheck.default.createPaycheck); // Update paycheck date

router.put('/update/date/:id', _paycheck.default.updateDate); // Get list of Paychecks

router.get('/user/:id', _paycheck.default.getPaychecks); // Delete Paycheck

router.delete('/delete/:id', _paycheck.default.deletePaycheck); // Update Paycheck

router.put('/update/:id/:user', _paycheck.default.updatePaycheck); // Get specific Paycheck

router.get('/:id', _paycheck.default.getPaycheck);
var _default = router;
exports.default = _default;