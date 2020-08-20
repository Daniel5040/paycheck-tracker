"use strict";

require("dotenv/config");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./routes/index"));

var _herokuSslRedirect = _interopRequireDefault(require("heroku-ssl-redirect"));

var _validateToken = require("./middleware/validate-token");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Establish connection with mongoDB
_mongoose.default.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

var db = _mongoose.default.connection;
db.on('error', () => {
  console.log('>error occurred trying to connect to the database');
});
db.once('open', () => {
  console.log('>successfully connected to database');
});
var app = (0, _express.default)(); // Middleware

app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
}));
app.use((0, _herokuSslRedirect.default)()); // Routes

app.use('/api/user', _index.default.userRoutes);
app.use('/api/workday', _validateToken.verifyToken, _index.default.workDayRoutes);
app.use('/api/paycheck', _validateToken.verifyToken, _index.default.paycheckRoutes); // Handle production

if (process.env.NODE_ENV === 'production') {
  app.use(_express.default.static(__dirname + '/public/')); // Handle Single Page Application

  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

var port = process.env.PORT || 5000;
app.listen(port, () => console.log(">Server started on port ".concat(port)));