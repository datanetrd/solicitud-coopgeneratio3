"use strict";

var _path = _interopRequireDefault(require("path"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _oficinas = _interopRequireDefault(require("../models/oficinas"));

var _config = require("./config");

var _regeneratorRuntime = require("regenerator-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var transporter = _nodemailer["default"].createTransport(_config.mail);

var SolicitudSucursal =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, nombre, apellido, cedula, sucursal, DestinoSucursal, mailOptions;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, apellido = _req$body.apellido, cedula = _req$body.cedula, sucursal = _req$body.sucursal; //envio de email

            _context.next = 3;
            return _oficinas["default"].findOne({
              where: {
                oficina: sucursal
              }
            });

          case 3:
            DestinoSucursal = _context.sent;
            //Opcionoes envio email
            mailOptions = {
              from: 'ramiperez26@gmail.com',
              //Destino del correo
              to: "".concat(DestinoSucursal.Email_Oficina),
              subject: "Nueva solicitud para socio ".concat(nombre, " ").concat(cedula),
              text: "Nueva solicitud de parte de ".concat(nombre, " ").concat(apellido),
              attachments: [{
                filename: "".concat(cedula, ".pdf"),
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

  return function SolicitudSucursal(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  SolicitudSucursal: SolicitudSucursal
};