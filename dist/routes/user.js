"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _user = _interopRequireDefault(require("../controllers/user"));

var _validateToken = require("../middleware/validate-token");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)(); // Register new user

router.post('/register', _user.default.register); // Login user

router.post('/login', _user.default.login); // Update information

router.put('/update/info/:id', _validateToken.verifyToken, _user.default.updateInfo); // Update password

router.put('/update/password/:id', _validateToken.verifyToken, _user.default.updatePassword); // Get ID

router.get('/getInfo/:email', _validateToken.verifyToken, _user.default.getInfo); // Delete user

router.delete('/delete/:id', _validateToken.verifyToken, _user.default.deleteUser);
var _default = router;
exports.default = _default;