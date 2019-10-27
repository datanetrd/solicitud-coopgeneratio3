"use strict";

var _express = require("express");

var _regeneratorRuntime = require("regenerator-runtime");

var _Nuevos_socios = _interopRequireDefault(require("../models/Nuevos_socios"));

var _Data_register = _interopRequireDefault(require("../models/Data_register"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.get('/', function (req, res) {
  res.render('home');
});
module.exports = router;