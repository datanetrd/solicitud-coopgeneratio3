"use strict";

var _regeneratorRuntime = require("regenerator-runtime");

var _express = require("express");

var _Nuevos_socios = _interopRequireDefault(require("../models/Nuevos_socios"));

var _Data_register = _interopRequireDefault(require("../models/Data_register"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _passport = _interopRequireDefault(require("passport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = (0, _express.Router)();
// router.get('/', async (req, res) => 
//   await nuevoSocios.findAll()
//     .then(nuevos_socios => res.render('solicitud', {
//       nuevos_socios
//       }))
//     .catch(err => console.log(err)));
router.put('/edit/:id',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var acept, id, values, selector;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            acept = req.body.acept;
            id = req.params.id;
            values = {
              estado_solicitud: acept
            };
            selector = {
              where: {
                id: id
              }
            };
            _context.next = 6;
            return _Nuevos_socios["default"].update(values, selector).then(function () {
              req.flash('success_msg', 'Solicitud Aceptada Correctamente.');
              res.redirect('/buscador');
            })["catch"](function (error) {// error handling
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router["delete"]('/delete/:id',
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id; // console.log(id);

            _context2.next = 3;
            return _Nuevos_socios["default"].destroy({
              where: {
                id: id
              }
            });

          case 3:
            _context2.next = 5;
            return _Data_register["default"].destroy({
              where: {
                id: id
              }
            }).then(function () {
              req.flash('success_msg', 'Solicitud rechazada correctamente.');
              res.redirect('/buscador');
            })["catch"](function (error) {
              console.log(error);
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()); // Search for solicitudes

router.get('/search',
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var cedula, token, admin;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            cedula = req.query.cedula;
            token = req.cookies['SystemAuth'];

            if (req.cookies['SystemAuth']) {
              admin = '';

              _jsonwebtoken["default"].verify(token, process.env.SECRET_OR_KEY, function (error, decoded) {
                if (decoded.role === 'admin') {
                  admin = decoded.role;
                }
              });
            }

            _context3.next = 5;
            return _Nuevos_socios["default"].findAll({
              where: {
                cedula: "".concat(cedula)
              }
            }).then(function (nuevos_socios) {
              return res.render('solicitud', {
                nuevos_socios: nuevos_socios,
                token: token,
                admin: admin
              });
            })["catch"](function (err) {
              return console.log(err);
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
module.exports = router; // router.post('/solicitud', (req,res,next) => {
// const {cedula} = req.body;
// DataRegister.findOne(({ where: {cedula: `${cedula}`} }),  (err, result) => {
//     if(err) {
//         res.render('solicitud.ejs', {products: null});
//     }
//     res.render('solicitud.ejs', {cedula: result});
//     next();
// });
// });