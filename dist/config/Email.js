"use strict";

var _path = _interopRequireDefault(require("path"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _oficinas = _interopRequireDefault(require("../models/oficinas"));

var _regeneratorRuntime = require("regenerator-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var transporter = _nodemailer["default"].createTransport({
  service: 'gmail',
  auth: {
    //se indica el usuario y password
    user: 'ramiperez26@gmail.com',
    pass: 'ramito111'
  }
});

var Santodomingo =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var nombre, santoDomingo, mailOptions;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            nombre = req.body.nombre;
            _context.next = 3;
            return _oficinas["default"].findOne({
              where: {
                Oficina: 'Santo Domingo'
              }
            });

          case 3:
            santoDomingo = _context.sent;
            //Opciones para el Envio del correo
            mailOptions = {
              from: 'ramiperez26@gmail.com',
              to: "".concat(santoDomingo.Email_Oficina),
              subject: 'nueva solicitud socio',
              text: "nueva solicitud de parte de ".concat(nombre),
              attachments: [{
                filename: "".concat(nombre, ".pdf"),
                path: _path["default"].join(__dirname, "../../".concat(nombre, ".pdf")),
                contentType: 'application/pdf'
              }]
            }; //Envio del mail

            transporter.sendMail(mailOptions, function (error, info) {
              //validar que haya habido un error
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }

              var filePath = _path["default"].join(__dirname, "../../".concat(nombre, ".pdf"));

              _fsExtra["default"].unlink(filePath);
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function Santodomingo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var Santiago =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var nombre, santiago, mailOptions;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            nombre = req.body.nombre;
            _context2.next = 3;
            return _oficinas["default"].findOne({
              where: {
                Oficina: 'Santiago'
              }
            });

          case 3:
            santiago = _context2.sent;
            //Opciones para el Envio del correo
            mailOptions = {
              from: 'ramiperez26@gmail.com',
              to: "".concat(santiago.Email_Oficina),
              subject: 'nueva solicitud socio',
              text: "nueva solicitud de parte de ".concat(nombre),
              attachments: [{
                filename: "".concat(nombre, ".pdf"),
                path: _path["default"].join(__dirname, "../../".concat(nombre, ".pdf")),
                contentType: 'application/pdf'
              }]
            }; //Envio del mail

            transporter.sendMail(mailOptions, function (error, info) {
              //validar que haya habido un error
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }

              var filePath = _path["default"].join(__dirname, "../../".concat(nombre, ".pdf"));

              _fsExtra["default"].unlink(filePath);
            });

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function Santiago(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var Constanza =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var nombre, constanza, mailOptions;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            nombre = req.body.nombre;
            _context3.next = 3;
            return _oficinas["default"].findOne({
              where: {
                Oficina: 'Constanza'
              }
            });

          case 3:
            constanza = _context3.sent;
            //Opciones para el Envio del correo
            mailOptions = {
              from: 'ramiperez26@gmail.com',
              to: "".concat(constanza.Email_Oficina),
              subject: 'nueva solicitud socio',
              text: "nueva solicitud de parte de ".concat(nombre),
              attachments: [{
                filename: "".concat(nombre, ".pdf"),
                path: _path["default"].join(__dirname, "../../".concat(nombre, ".pdf")),
                contentType: 'application/pdf'
              }]
            }; //Envio del mail

            transporter.sendMail(mailOptions, function (error, info) {
              //validar que haya habido un error
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }

              var filePath = _path["default"].join(__dirname, "../../".concat(nombre, ".pdf"));

              _fsExtra["default"].unlink(filePath);
            });

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function Constanza(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var Sanfrancisco =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var nombre, sanFrancisco, mailOptions;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            nombre = req.body.nombre;
            _context4.next = 3;
            return _oficinas["default"].findOne({
              where: {
                Oficina: 'San Francisco'
              }
            });

          case 3:
            sanFrancisco = _context4.sent;
            //Opciones para el Envio del correo
            mailOptions = {
              from: 'ramiperez26@gmail.com',
              to: "".concat(sanFrancisco.Email_Oficina),
              subject: 'nueva solicitud socio',
              text: "nueva solicitud de parte de ".concat(nombre),
              attachments: [{
                filename: "".concat(nombre, ".pdf"),
                path: _path["default"].join(__dirname, "../../".concat(nombre, ".pdf")),
                contentType: 'application/pdf'
              }]
            }; //Envio del mail

            transporter.sendMail(mailOptions, function (error, info) {
              //validar que haya habido un error
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }

              var filePath = _path["default"].join(__dirname, "../../".concat(nombre, ".pdf"));

              _fsExtra["default"].unlink(filePath);
            });

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function Sanfrancisco(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

module.exports = {
  Santodomingo: Santodomingo,
  Santiago: Santiago,
  Constanza: Constanza,
  Sanfrancisco: Sanfrancisco
};