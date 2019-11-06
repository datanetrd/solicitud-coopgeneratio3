"use strict";

var _express = require("express");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _Form = require("../controllers/Form.Controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)(); // import request from 'request';
// const {nuevoSocios} = require('../models/nuevos_socios');

// const db = require('../../config/dbConnection');
// const validations = require('../../config/validations');
router.get('/form', function (req, res) {
  var token = req.cookies['SystemAuth'];

  if (req.cookies['SystemAuth']) {
    var admin = '';

    _jsonwebtoken["default"].verify(token, process.env.SECRET_OR_KEY, function (error, decoded) {
      if (decoded.role === 'admin') {
        admin = decoded.role;
      }
    });
  }

  var token = req.cookies['SystemAuth'];
  res.render('form', {
    token: token,
    admin: admin
  });
});
router.post('/form', _Form.savesocioDB, function (req, res) {
  req.flash('success_msg', 'Solicitud Enviada Correctamente.');
  res.redirect('/');
});
module.exports = router; // res.redirect('/');