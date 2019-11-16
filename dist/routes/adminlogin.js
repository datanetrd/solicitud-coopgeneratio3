"use strict";

var _express = require("express");

var _regeneratorRuntime = require("regenerator-runtime");

var _LoginController = require("../controllers/LoginController");

const router = (0, _express.Router)();
router.get('/adminlogin', (req, res) => {
  res.render('adminlogin');
});
module.exports = router;