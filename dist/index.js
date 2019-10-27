"use strict";

var _express = _interopRequireDefault(require("express"));

var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _connectFlash = _interopRequireDefault(require("connect-flash"));

var _passport = _interopRequireDefault(require("passport"));

var _path = _interopRequireDefault(require("path"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _dbconfig = require("./config/dbconfig");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var methodOverride = require('method-override');

// import request from 'request';
// Initilizations
var app = (0, _express["default"])(); // Database Connections

// Test DataBase
_dbconfig.sequelize.authenticate().then(function (err) {
  console.log('Connection has been established successfully.');
})["catch"](function (err) {
  console.log('Unable to connect to the database:', err);
}); // Setings


app.set('port', process.env.PORT || 3000);
app.set('views', _path["default"].join(__dirname, './views'));
app.engine('.hbs', (0, _expressHandlebars["default"])({
  defaultLayout: 'main',
  layoutDir: _path["default"].join(app.get('views'), 'layouts'),
  partialsDir: _path["default"].join(app.get('views'), 'partials'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs'); // middleware

app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(methodOverride('_method'));
app.use((0, _expressSession["default"])({
  secret: 'mysecret27',
  resave: true,
  saveUninitialized: true
}));
app.use(_passport["default"].initialize());
app.use(_passport["default"].session());
app.use((0, _connectFlash["default"])()); // Global Variables

app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
}); // routes

app.use(require('./routes/form'));
app.use(require('./routes/home')); // app.use(require('./routes/pdf'));
// search form

app.get('/buscador', function (req, res) {
  return res.render('buscador');
});
app.use('/solicitud', require('./routes/solicitud')); // Static Files

app.use(_express["default"]["static"](_path["default"].join(__dirname, './assets'))); // Server is listenning

app.listen(app.get('port'), function () {
  console.log('Server on port', app.get('port'));
});