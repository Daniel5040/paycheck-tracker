"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Middleware to validate token
var verifyToken = (req, res, next) => {
  var token = req.header('Authorization');
  if (!token) return res.status(401).json({
    error: 'Access denied'
  });

  try {
    var verified = _jsonwebtoken.default.verify(token, process.env.TOKEN_SECRET);

    req.user = verified;
    next(); // To continue the flow
  } catch (error) {
    res.status(400).json({
      error: 'Token is not valid'
    });
  }
};

exports.verifyToken = verifyToken;