"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.savesocioDB = savesocioDB;

var _os = _interopRequireDefault(require("os"));

var _request = _interopRequireDefault(require("request"));

var _regeneratorRuntime = _interopRequireWildcard(require("regenerator-runtime"));

var _puppeteer = _interopRequireDefault(require("puppeteer"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _handlebars = _interopRequireDefault(require("handlebars"));

var _path = _interopRequireDefault(require("path"));

var _moment = _interopRequireDefault(require("moment"));

var _Data_register = _interopRequireDefault(require("../models/Data_register"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _Nuevos_socios = _interopRequireDefault(require("../models/Nuevos_socios"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function savesocioDB(_x, _x2) {
  return _savesocioDB.apply(this, arguments);
} //     // fields: ['nombre', 'cedula', 'estadocivil', 'direccionresidencial', 'provincia', 'telefonos', 'celular', 'oficinatrabajo', 'direcciontrabajo', 'telefono', 'fax', 'puestotrabajo', 'fechaingresoempresa', 'sueldo', 'email']


function _savesocioDB() {
  _savesocioDB = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime["default"].mark(function _callee3(req, res) {
    var captcha, secretKey, verifyURL, _req$body, nombre, apellido, cedula, estadocivil, direccionresidencial, provincia, telefonos, celular, oficinatrabajo, direcciontrabajo, telefonotrabajo, fax, puesto, sueldo, fechaingresoempresa, email, ahorromensual, certificadoaportacion, valorcertificado, nombre2, apellido2, cedula2, sucursal, errors, dataName, data, datta, compile;

    return _regeneratorRuntime["default"].wrap(function _callee3$(_context3) {
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
              body = JSON.parse(body);
              console.log(body); // // if not successful
              // if(body.success !== undefined && !body.success){
              //   req.flash("error", "Captcha Failed");
              //   return res.redirect("/");
              // }
              // //If Successful
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
            _context3.next = 50;
            break;

          case 32:
            _context3.prev = 32;
            _context3.next = 35;
            return _Nuevos_socios["default"].create({
              nombre: nombre,
              apellido: apellido
            });

          case 35:
            dataName = _context3.sent;
            _context3.next = 38;
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

          case 38:
            data = _context3.sent;

            if (data) {
              res.redirect('/');
            }

            _context3.next = 46;
            break;

          case 42:
            _context3.prev = 42;
            _context3.t0 = _context3["catch"](32);
            console.log(_context3.t0);
            res.status(500).json({
              message: 'Algo ha ido Mal',
              data: {}
            }); // res.redirect('/');

          case 46:
            ;
            datta = req.body;

            compile =
            /*#__PURE__*/
            function () {
              var _ref = _asyncToGenerator(
              /*#__PURE__*/
              _regeneratorRuntime["default"].mark(function _callee(templateName, datta) {
                var filePath, html;
                return _regeneratorRuntime["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        filePath = _path["default"].join(process.cwd(), './src/views', "".concat(templateName, ".hbs"));
                        _context.next = 3;
                        return _fsExtra["default"].readFileSync(filePath, 'utf-8');

                      case 3:
                        html = _context.sent;
                        console.log(html);
                        return _context.abrupt("return", _handlebars["default"].compile(html)(datta));

                      case 6:
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
            _regeneratorRuntime["default"].mark(function _callee2() {
              var browser, page, content, options, transporter, mailOptions, _mailOptions;

              return _regeneratorRuntime["default"].wrap(function _callee2$(_context2) {
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
                      console.log(content);
                      _context2.next = 13;
                      return page["goto"]("data:text/html;charset=UTF-8,".concat(content), {
                        waitUntil: 'networkidle0'
                      });

                    case 13:
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
                      _context2.next = 16;
                      return page.emulateMedia('screen');

                    case 16:
                      _context2.next = 18;
                      return page.pdf(options);

                    case 18:
                      console.log('done');
                      _context2.next = 21;
                      return browser.close();

                    case 21:
                      _context2.next = 26;
                      break;

                    case 23:
                      _context2.prev = 23;
                      _context2.t0 = _context2["catch"](0);
                      console.log('ha habido un error', _context2.t0);

                    case 26:
                      transporter = _nodemailer["default"].createTransport({
                        service: 'gmail',
                        auth: {
                          //se indica el usuario y password
                          user: 'ramiperez26@gmail.com',
                          pass: 'ramito111'
                        }
                      });

                      if (sucursal === "santo domingo") {
                        //Opciones para el Envio del correo
                        mailOptions = {
                          from: 'ramiperez26@gmail.com',
                          to: 'jorgeluisv@gmail.com',
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
                      }

                      if (sucursal === "santiago") {
                        //Opciones para el Envio del correo
                        _mailOptions = {
                          from: 'ramiperez26@gmail.com',
                          to: 'poner correo here',
                          subject: 'nueva solicitud socio'
                        }; //Envio del mail

                        transporter.sendMail(_mailOptions, function (error, info) {
                          //validar que haya habido un error
                          if (error) {
                            console.log(error);
                          }

                          var filePath = _path["default"].join(__dirname, "../../".concat(nombre, ".pdf"));

                          _fsExtra["default"].unlink(filePath);
                        });
                      }

                    case 29:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, null, [[0, 23]]);
            }))();

          case 50:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[32, 42]]);
  }));
  return _savesocioDB.apply(this, arguments);
}