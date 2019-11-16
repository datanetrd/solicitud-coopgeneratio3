"use strict";

var _express = require("express");

const router = (0, _express.Router)();
router.get('/logout', function (req, res) {
  res.clearCookie('SystemAuth');
  req.flash('success_msg', 'Ha cerrado sesión correctamente.');
  res.redirect('/');
});
module.exports = router;