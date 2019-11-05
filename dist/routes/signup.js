"use strict";

var _regeneratorRuntime = require("regenerator-runtime");

var _express = require("express");

var _Nuevos_socios = _interopRequireDefault(require("../models/Nuevos_socios"));

var _Data_register = _interopRequireDefault(require("../models/Data_register"));

var _passport = _interopRequireDefault(require("passport"));

var _helpers = _interopRequireDefault(require("../config/helpers/helpers"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = (0, _express.Router)();

var createUser =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(newUser) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _User["default"].create(newUser);

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getUser =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(obj) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _User["default"].findOne({
              where: obj
            });

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getUser(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

router.get('/signup', function (req, res) {
  res.render('signup');
}); // register route

router.post('/signup',
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res, next) {
    var _req$body, user_name, email, password, newUser, Usermail;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, user_name = _req$body.user_name, email = _req$body.email, password = _req$body.password;
            newUser = {
              user_name: user_name,
              email: email,
              password: password
            };
            _context3.next = 4;
            return getUser({
              email: email
            });

          case 4:
            Usermail = _context3.sent;

            if (!Usermail) {
              _context3.next = 9;
              break;
            }

            req.flash('error_msg', 'El correo ya esta registrado.');
            res.redirect('/signup');
            return _context3.abrupt("return");

          case 9:
            ;
            _context3.next = 12;
            return _helpers["default"].encryptPassword(password);

          case 12:
            newUser.password = _context3.sent;
            createUser(newUser).then(req.flash('success_msg', "Cuenta creada exitosamente."), res.redirect('/login'))["catch"](function (err) {
              // print the error details
              console.log(err);
            });

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x3, _x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}()); // router.post('/signup',passport.authenticate('local.signup', {
//     successRedirect: '/',
//     FailureRedirect: '/signup',
//     FailureFlash: true
//   }));

module.exports = router;