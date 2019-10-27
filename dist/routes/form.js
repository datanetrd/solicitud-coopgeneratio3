"use strict";

var _express = require("express");

var _controller = require("../controllers/controller.socio");

var router = (0, _express.Router)(); // import request from 'request';
// const {nuevoSocios} = require('../models/nuevos_socios');

// const db = require('../../config/dbConnection');
// const validations = require('../../config/validations');
router.get('/form', function (req, res) {
  res.render('form');
});
router.post('/form', _controller.savesocioDB);
module.exports = router; // res.redirect('/');