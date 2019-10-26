"use strict";

var _regeneratorRuntime = require("regenerator-runtime");

var _Data_register = _interopRequireDefault(require("../models/Data_register"));

var _Nuevos_socios = _interopRequireDefault(require("../models/Nuevos_socios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var save =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, nombre, apellido, cedula, estadocivil, direccionresidencial, provincia, telefonos, celular, oficinatrabajo, direcciontrabajo, telefonotrabajo, fax, puesto, sueldo, fechaingresoempresa, email, ahorromensual, certificadoaportacion, valorcertificado, nombre2, apellido2, cedula2, sucursal, dataName, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, apellido = _req$body.apellido, cedula = _req$body.cedula, estadocivil = _req$body.estadocivil, direccionresidencial = _req$body.direccionresidencial, provincia = _req$body.provincia, telefonos = _req$body.telefonos, celular = _req$body.celular, oficinatrabajo = _req$body.oficinatrabajo, direcciontrabajo = _req$body.direcciontrabajo, telefonotrabajo = _req$body.telefonotrabajo, fax = _req$body.fax, puesto = _req$body.puesto, sueldo = _req$body.sueldo, fechaingresoempresa = _req$body.fechaingresoempresa, email = _req$body.email, ahorromensual = _req$body.ahorromensual, certificadoaportacion = _req$body.certificadoaportacion, valorcertificado = _req$body.valorcertificado, nombre2 = _req$body.nombre2, apellido2 = _req$body.apellido2, cedula2 = _req$body.cedula2, sucursal = _req$body.sucursal;
            _context.prev = 1;
            _context.next = 4;
            return _Nuevos_socios["default"].create({
              nombre: nombre,
              apellido: apellido,
              cedula: cedula
            });

          case 4:
            dataName = _context.sent;
            _context.next = 7;
            return _Data_register["default"].create({
              nombre: nombre,
              apellido: apellido,
              cedula: cedula,
              estadocivil: estadocivil,
              direccionresidencial: direccionresidencial,
              provincia: provincia,
              telefonos: telefonos,
              celular: celular,
              oficinatrabajo: oficinatrabajo,
              direcciontrabajo: direcciontrabajo,
              telefonotrabajo: telefonotrabajo,
              fax: fax,
              puesto: puesto,
              sueldo: sueldo,
              fechaingresoempresa: fechaingresoempresa,
              email: email,
              ahorromensual: ahorromensual,
              certificadoaportacion: certificadoaportacion,
              valorcertificado: valorcertificado,
              nombre2: nombre2,
              apellido2: apellido2,
              cedula2: cedula2
            });

          case 7:
            data = _context.sent;

            if (data) {
              res.redirect('/');
            }

            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(500).json({
              message: 'Algo ha ido Mal',
              data: {}
            }); // res.redirect('/');

          case 15:
            ;

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 11]]);
  }));

  return function save(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  save: save
};