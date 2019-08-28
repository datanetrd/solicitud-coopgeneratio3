"use strict";

var _express = _interopRequireDefault(require("express"));

var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));

var _path = _interopRequireDefault(require("path"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _dbconfig = require("./config/dbconfig");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import Sequelize from 'sequelize';
// import flash from 'connect-flash';
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
})); // app.use(morgan('dev'));

app.use((0, _expressSession["default"])({
  secret: 'mysecret27',
  resave: true,
  saveUninitialized: true
})); // app.use(flash());
// routes

app.use(require('./routes/form')); // Static Files

app.use(_express["default"]["static"](_path["default"].join(__dirname, './assets'))); // Global Variables
// app.use((req,res,next)=> {
//     res.locals.success_msg = req.flash('success_msg');
//     res.locals.error_msg = req.flash('error_msg');
//     res.locals.error = req.flash('error');
//     res.locals.user = req.user || null;
//     next();
// });
// Server is listenning

app.listen(app.get('port'), function () {
  console.log('Server on port', app.get('port'));
});