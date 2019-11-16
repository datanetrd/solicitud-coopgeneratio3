"use strict";

var _express = require("express");

var _regeneratorRuntime = require("regenerator-runtime");

var _Nuevos_socios = _interopRequireDefault(require("../models/Nuevos_socios"));

var _Data_register = _interopRequireDefault(require("../models/Data_register"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.get('/', (req, res) => {
  var token = req.cookies['SystemAuth'];

  if (req.cookies['SystemAuth']) {
    var admin = '';

    _jsonwebtoken.default.verify(token, process.env.SECRET_OR_KEY, function (error, decoded) {
      if (decoded.role === 'admin') {
        admin = decoded.role;
      }
    });
  }

  res.render('home', {
    admin,
    token
  });
});
module.exports = router;