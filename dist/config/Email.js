"use strict";

var _nodemailer = _interopRequireDefault(require("nodemailer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var transporter = _nodemailer["default"].createTransport({
  service: 'gmail',
  auth: {
    //se indica el usuario y password
    user: 'ramiperez71@gmail.com',
    pass: 'Ramesh2627'
  }
}); //Opciones para el Envio del correo


var mailOptions = {
  from: 'ramiperez71@gmail.com',
  to: 'ramiperez26@gmail.com',
  subject: 'nueva solicitud socio'
};