"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jwtAuth = jwtAuth;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _User = _interopRequireDefault(require("../models/User"));

var _helpers = _interopRequireDefault(require("../config/helpers/helpers"));

var _config = require("../config/config");

var _regeneratorRuntime = require("regenerator-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv["default"].config();

var getUser =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(obj) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _User["default"].findOne({
              where: obj
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

function jwtAuth(_x2, _x3, _x4) {
  return _jwtAuth.apply(this, arguments);
}

function _jwtAuth() {
  _jwtAuth = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res, next) {
    var jwtOptions, _req$body, email, password, user, validPass, payload, token;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            jwtOptions = {};
            jwtOptions.secretOrKey = process.env.SECRET_OR_KEY;
            _req$body = req.body, email = _req$body.email, password = _req$body.password;

            if (!(email && password)) {
              _context2.next = 12;
              break;
            }

            _context2.next = 6;
            return getUser({
              email: email
            });

          case 6:
            user = _context2.sent;

            if (!user) {
              req.flash('error_msg', 'Usuario no encontrado.');
              res.redirect('/');
            }

            _context2.next = 10;
            return _helpers["default"].matchPassword(password, user.password);

          case 10:
            validPass = _context2.sent;

            if (validPass) {
              payload = {
                id: user._id,
                email: user.email,
                role: user.role
              };
              token = _jsonwebtoken["default"].sign(payload, jwtOptions.secretOrKey, _config.expiratejwt);
              res.cookie('SystemAuth', token, {
                httpOnly: true,
                secure: false,
                maxAge: 3600000
              });
              console.log(token);
              req.flash('success_msg', "Ha iniciado sesi\xF3n exitosamente. ".concat(user.user_name, " "));
              res.redirect('/');
            } else {
              req.flash('error_msg', 'Contraseña incorrecta.');
              res.redirect('/login');
            }

          case 12:
            next();

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _jwtAuth.apply(this, arguments);
}

module.exports = {
  jwtAuth: jwtAuth
};