"use strict";

var _express = require("express");

var _regeneratorRuntime = require("regenerator-runtime");

var _LoginController = require("../controllers/LoginController");

var router = (0, _express.Router)();
// const getUser = async obj => {
//     return await User.findOne({
//     where: obj,
//   });
//   };
router.get('/login', function (req, res) {
  res.render('login');
}); // login route

router.post('/login', _LoginController.jwtAuth);
module.exports = router;