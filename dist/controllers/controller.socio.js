"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.savesocioDB = savesocioDB;

var _os = _interopRequireDefault(require("os"));

var _request = _interopRequireDefault(require("request"));

require("regenerator-runtime/runtime");

var _puppeteer = _interopRequireDefault(require("puppeteer"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _handlebars = _interopRequireDefault(require("handlebars"));

var _path = _interopRequireDefault(require("path"));

var _Data_register = _interopRequireDefault(require("../models/Data_register"));

var _oficinas = _interopRequireDefault(require("../models/oficinas"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _Nuevos_socios = _interopRequireDefault(require("../models/Nuevos_socios"));

var _Email = _interopRequireDefault(require("../config/Email"));

var _dbSave = _interopRequireDefault(require("../config/dbSave"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function savesocioDB(_x, _x2) {
  return _savesocioDB.apply(this, arguments);
} //     // fields: ['nombre', 'cedula', 'estadocivil', 'direccionresidencial', 'provincia', 'telefonos', 'celular', 'oficinatrabajo', 'direcciontrabajo', 'telefono', 'fax', 'puestotrabajo', 'fechaingresoempresa', 'sueldo', 'email']


function _savesocioDB() {
  _savesocioDB = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var captcha, secretKey, verifyURL, _req$body, nombre, apellido, cedula, estadocivil, direccionresidencial, provincia, telefonos, celular, oficinatrabajo, direcciontrabajo, telefonotrabajo, fax, puesto, sueldo, fechaingresoempresa, email, ahorromensual, certificadoaportacion, valorcertificado, nombre2, apellido2, cedula2, sucursal, errors, cedulaUser, datta, compile;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            captcha = req.body['g-recaptcha-response']; // Secret Key

            secretKey = '6Lc7Q7MUAAAAAOiHyEwkMOxgJvSv1sF9avSLEOs6'; // Verify URL

            verifyURL = "https://www.google.com/recaptcha/api/siteverify?secret=".concat(secretKey, "&response=").concat(captcha, "&remoteip=").concat(req.connection.remoteAddress); // if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null)
            // {
            //  req.flash("error", "Captcha Failed");
            // }
            // Make Request To VerifyURL

            (0, _request["default"])(verifyURL, function (err, response, body) {
              body = JSON.parse(body); // console.log(body);
              // if not successful

              if (body.success !== undefined && !body.success) {
                req.flash("error_msg", "Captcha Failed");
                return res.redirect("/");
              } // //If Successful
              // return res.json({"success": true, "msg":"Captcha passed"});

            });
            _req$body = req.body, nombre = _req$body.nombre, apellido = _req$body.apellido, cedula = _req$body.cedula, estadocivil = _req$body.estadocivil, direccionresidencial = _req$body.direccionresidencial, provincia = _req$body.provincia, telefonos = _req$body.telefonos, celular = _req$body.celular, oficinatrabajo = _req$body.oficinatrabajo, direcciontrabajo = _req$body.direcciontrabajo, telefonotrabajo = _req$body.telefonotrabajo, fax = _req$body.fax, puesto = _req$body.puesto, sueldo = _req$body.sueldo, fechaingresoempresa = _req$body.fechaingresoempresa, email = _req$body.email, ahorromensual = _req$body.ahorromensual, certificadoaportacion = _req$body.certificadoaportacion, valorcertificado = _req$body.valorcertificado, nombre2 = _req$body.nombre2, apellido2 = _req$body.apellido2, cedula2 = _req$body.cedula2, sucursal = _req$body.sucursal;
            errors = []; //nombre validations

            if (nombre.lenght <= 3) {
              errors.push({
                text: 'El Nombre debe de tener más de 3 caracteres'
              });
            }

            if (typeof nombre !== 'string' && /^[a-z]+$/i.test(nombre)) {
              errors.push({
                text: 'El Nombre no puede tener caracteres númericos'
              });
            } //nombre2 validations


            if (nombre2.lenght <= 3) {
              errors.push({
                text: 'El segundo nombre debe de tener más de 3 caracteres'
              });
            }

            if (typeof nombre2 !== 'string' && /^[a-z]+$/i.test(nombre2)) {
              errors.push({
                text: 'El segundo nombre no puede tener caracteres númericos'
              });
            } //apellido validations


            if (apellido.lenght <= 3) {
              errors.push({
                text: 'El Apellido debe de tener más de 3 caracteres'
              });
            }

            if (typeof apellido !== 'string' && /^[a-z]+$/i.test(apellido)) {
              errors.push({
                text: 'El Apellido no puede tener caracteres númericos'
              });
            } //apellido2 validations


            if (apellido2.lenght <= 3) {
              errors.push({
                text: 'El segundo apellido debe de tener más de 3 caracteres'
              });
            }

            if (typeof apellido2 !== 'string' && /^[a-z]+$/i.test(apellido2)) {
              errors.push({
                text: 'El segundo apellido no puede tener caracteres númericos'
              });
            } //cedula validations


            if (cedula.lenght <= 8) {
              errors.push({
                text: 'La Cedula debe tener mas de  8 digitos'
              });
            } //estado civil validations


            if (!estadocivil) {
              errors.push({
                text: 'Por favor Seleccione su Estado Civil'
              });
            } //dirección residencial validations


            if (direccionresidencial.length <= 0) {
              errors.push({
                text: 'El siguiente campo esta vacio: Dirección Residencial'
              });
            } //provincia validations


            if (provincia.length <= 0) {
              errors.push({
                text: 'El siguiente campo esta vacio: Provincia'
              });
            } // telefono validations


            if (telefonos.length < 8) {
              errors.push({
                text: 'El Telefono debe de tener por lo menos 8 Digitos'
              });
            } //celular validations


            if (celular.length < 8) {
              errors.push({
                text: 'El Celular debe de tener por lo menos 8 Digitos'
              });
            } //oficina validations


            if (oficinatrabajo.length <= 0) {
              errors.push({
                text: 'El siguiente campo esta vacio: Oficina de Trabajo'
              });
            } //dirección trabajo validations


            if (direcciontrabajo.length <= 0) {
              errors.push({
                text: 'El siguiente campo esta vacio: Dirección de Trabajo'
              });
            } // telefono trabajo validations


            if (telefonotrabajo.length < 8) {
              errors.push({
                text: 'El Telefono del Trabajo debe de tener por lo menos 8 Digitos'
              });
            } // fecha ingreso empresa validations


            if (fechaingresoempresa.length <= 0) {
              errors.push({
                text: 'El siguiente campo esta vacio: Fecha de Ingreso Empresa'
              });
            } //fax validation


            if (fax.length <= 0) {
              errors.push({
                text: 'El siguiente campo esta vacio: Fax'
              });
            } //puesto validation


            if (puesto.length <= 0) {
              errors.push({
                text: 'El siguiente campo esta vacio: Puesto'
              });
            } //sueldo validation


            if (sueldo.length <= 0) {
              errors.push({
                text: 'El siguiente campo esta vacio: Sueldo'
              });
            } //ahorro validation


            if (ahorromensual.length <= 0) {
              errors.push({
                text: 'El siguiente campo esta vacio: ahorromensual'
              });
            } //errors validations 


            if (!(errors.length > 0)) {
              _context3.next = 32;
              break;
            }

            res.render('form', {
              errors: errors,
              nombre: nombre,
              apellido: apellido,
              estadocivil: estadocivil,
              cedula: cedula,
              direccionresidencial: direccionresidencial,
              telefonos: telefonos,
              celular: celular,
              provincia: provincia,
              oficinatrabajo: oficinatrabajo,
              direcciontrabajo: direcciontrabajo,
              telefonotrabajo: telefonotrabajo,
              fax: fax,
              puesto: puesto,
              fechaingresoempresa: fechaingresoempresa,
              sueldo: sueldo,
              email: email,
              ahorromensual: ahorromensual,
              certificadoaportacion: certificadoaportacion,
              valorcertificado: valorcertificado,
              nombre2: nombre2,
              apellido2: apellido2,
              cedula2: cedula2
            });
            _context3.next = 36;
            break;

          case 32:
            _context3.next = 34;
            return _Data_register["default"].findOne({
              where: {
                cedula: "".concat(cedula)
              }
            });

          case 34:
            cedulaUser = _context3.sent;

            if (cedulaUser) {
              req.flash('success_msg', 'Usted ya tiene una solicitud en progreso.');
              res.redirect('/');
            } else {
              _dbSave["default"].save(req, res);

              datta = req.body;

              compile =
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee(templateName, datta) {
                  var filePath, html;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          filePath = _path["default"].join(process.cwd(), './src/views', "".concat(templateName, ".hbs"));
                          _context.next = 3;
                          return _fsExtra["default"].readFileSync(filePath, 'utf-8');

                        case 3:
                          html = _context.sent;
                          return _context.abrupt("return", _handlebars["default"].compile(html)(datta));

                        case 5:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function compile(_x3, _x4) {
                  return _ref.apply(this, arguments);
                };
              }();

              _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee2() {
                var browser, page, content, options;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return _puppeteer["default"].launch({
                          args: ['--no-sandbox'],
                          headless: true
                        });

                      case 3:
                        browser = _context2.sent;
                        _context2.next = 6;
                        return browser.newPage();

                      case 6:
                        page = _context2.sent;
                        _context2.next = 9;
                        return compile('pdf27', datta);

                      case 9:
                        content = _context2.sent;
                        _context2.next = 12;
                        return page["goto"]("data:text/html;charset=UTF-8,".concat(content), {
                          waitUntil: 'networkidle0'
                        });

                      case 12:
                        options = {
                          height: '1110px',
                          width: '816px',
                          headerTemplate: "<p></p>",
                          footerTemplate: "<p></p>",
                          pageRanges: "1-1",
                          displayHeaderFooter: false,
                          margin: {
                            top: "10px",
                            bottom: "30px"
                          },
                          printBackground: true,
                          path: "".concat(nombre, ".pdf")
                        };
                        _context2.next = 15;
                        return page.emulateMedia('screen');

                      case 15:
                        _context2.next = 17;
                        return page.pdf(options);

                      case 17:
                        console.log('done');
                        _context2.next = 20;
                        return browser.close();

                      case 20:
                        _context2.next = 25;
                        break;

                      case 22:
                        _context2.prev = 22;
                        _context2.t0 = _context2["catch"](0);
                        console.log('ha habido un error', _context2.t0);

                      case 25:
                        if (sucursal === "Santo Domingo") {
                          _Email["default"].Santodomingo(req, res);
                        }

                        if (sucursal === "Santiago") {
                          _Email["default"].Santiago(req, res);
                        }

                        if (sucursal === "Constanza") {
                          _Email["default"].Constanza(req, res);
                        }

                        if (sucursal === "San Francisco") {
                          _Email["default"].Sanfrancisco(req, res);
                        }

                      case 29:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, null, [[0, 22]]);
              }))();
            }

          case 36:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _savesocioDB.apply(this, arguments);
}