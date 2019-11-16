"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.savesocioDB = savesocioDB;

var _request = _interopRequireDefault(require("request"));

require("regenerator-runtime/runtime");

var _puppeteer = _interopRequireDefault(require("puppeteer"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _handlebars = _interopRequireDefault(require("handlebars"));

var _path = _interopRequireDefault(require("path"));

var _Data_register = _interopRequireDefault(require("../models/Data_register"));

var _Email = _interopRequireDefault(require("../config/Email"));

var _dbSave = _interopRequireDefault(require("../config/dbSave"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import os from 'os';
// import moment from 'moment';
// import oficinas from '../models/oficinas';
// import nodemailer from 'nodemailer';
// import nuevoSocios from '../models/Nuevos_socios';
async function savesocioDB(req, res, next) {
  const captcha = req.body['g-recaptcha-response']; // Secret Key

  const secretKey = '6Lc7Q7MUAAAAAOiHyEwkMOxgJvSv1sF9avSLEOs6'; // Verify URL

  var verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}&remoteip=${req.connection.remoteAddress}`; // if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null)
  // {
  //  req.flash("error", "Captcha Failed");
  // }
  // Make Request To VerifyURL

  (0, _request.default)(verifyURL, (err, response, body) => {
    body = JSON.parse(body); // console.log(body);
    // if not successful

    if (body.success !== undefined && !body.success) {
      console.log(FaileCaptcha);
    }
  });
  const {
    nombre,
    apellido,
    cedula,
    estadocivil,
    direccionresidencial,
    provincia,
    telefonos,
    celular,
    oficinatrabajo,
    direcciontrabajo,
    telefonotrabajo,
    fax,
    puesto,
    sueldo,
    fechaingresoempresa,
    email,
    ahorromensual,
    certificadoaportacion,
    valorcertificado,
    nombre2,
    apellido2,
    cedula2,
    sucursal
  } = req.body;
  let errors = []; //nombre validations

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


  if (errors.length > 0) {
    res.render('form', {
      errors,
      nombre,
      apellido,
      estadocivil,
      cedula,
      direccionresidencial,
      telefonos,
      celular,
      provincia,
      oficinatrabajo,
      direcciontrabajo,
      telefonotrabajo,
      fax,
      puesto,
      fechaingresoempresa,
      sueldo,
      email,
      ahorromensual,
      certificadoaportacion,
      valorcertificado,
      nombre2,
      apellido2,
      cedula2
    });
  } else {
    // Look for cedula coincidence
    const cedulaUser = await _Data_register.default.findOne({
      where: {
        cedula: `${cedula}`
      }
    });

    if (cedulaUser) {
      req.flash('error_msg', 'Usted ya tiene una solicitud en progreso.');
      res.redirect('/');
      return;
    } else {
      _dbSave.default.save(req, res);

      const datta = req.body;

      const compile = async function (templateName, datta) {
        const filePath = _path.default.join(process.cwd(), './src/views', `${templateName}.hbs`);

        const html = await _fsExtra.default.readFileSync(filePath, 'utf-8'); // console.log(html);

        return _handlebars.default.compile(html)(datta);
      };

      (async function () {
        try {
          const browser = await _puppeteer.default.launch({
            args: ['--no-sandbox'],
            headless: true
          });
          const page = await browser.newPage();
          const content = await compile('pdf27', datta); // console.log(content);

          await page.goto(`data:text/html;charset=UTF-8,${content}`, {
            waitUntil: 'networkidle0'
          });
          const options = {
            // height: '1110px',
            // width: '816px',
            format: "A4",
            headerTemplate: "<p></p>",
            footerTemplate: "<p></p>",
            pageRanges: "1-1",
            displayHeaderFooter: false,
            margin: {
              top: "10px",
              bottom: "30px"
            },
            printBackground: true,
            path: `${nombre}.pdf`
          };
          await page.emulateMedia('screen');
          await page.pdf(options);
          console.log('done');
          await browser.close();
        } catch (e) {
          // req.flash('error_msg', 'ha habido un error.');
          // res.redirect('/form');
          console.log(e);
        }

        try {
          _Email.default.SolicitudSucursal(req, res);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }

  next();
} //     // fields: ['nombre', 'cedula', 'estadocivil', 'direccionresidencial', 'provincia', 'telefonos', 'celular', 'oficinatrabajo', 'direcciontrabajo', 'telefono', 'fax', 'puestotrabajo', 'fechaingresoempresa', 'sueldo', 'email']