"use strict";

var _express = require("express");

var _Form = require("../controllers/Form.Controller");

var router = (0, _express.Router)(); // import request from 'request';
// const {nuevoSocios} = require('../models/nuevos_socios');

// const db = require('../../config/dbConnection');
// const validations = require('../../config/validations');
router.get('/form', function (req, res) {
  var token = req.cookies['SystemAuth'];
  res.render('form', {
    token: token
  });
});
router.post('/form', _Form.savesocioDB, function (req, res) {
  req.flash('success_msg', 'Solicitud Enviada Correctamente.');
  res.redirect('/');
});
module.exports = router; // res.redirect('/');