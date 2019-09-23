"use strict";

var _express = require("express");

var _controller = require("../controllers/controller.socio");

var router = (0, _express.Router)(); // const {nuevoSocios} = require('../models/nuevos_socios');

// const db = require('../../config/dbConnection');
router.get('/pdf27', function (req, res) {
  res.render('pdf27');
});
module.exports = router;