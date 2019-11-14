"use strict";

var _regeneratorRuntime = require("regenerator-runtime");

var _express = require("express");

var _Nuevos_socios = _interopRequireDefault(require("../models/Nuevos_socios"));

var _Data_register = _interopRequireDefault(require("../models/Data_register"));

var _passport = _interopRequireDefault(require("passport"));

var _helpers = _interopRequireDefault(require("../config/helpers/helpers"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();

const createUser = async newUser => {
  return await _User.default.create(newUser);
};

const getUser = async obj => {
  return await _User.default.findOne({
    where: obj
  });
};

router.get('/signup', (req, res) => {
  res.render('signup');
}); // register route

router.post('/signup', async function (req, res, next) {
  const {
    user_name,
    email,
    password
  } = req.body;
  const newUser = {
    user_name,
    email,
    password
  };
  let Usermail = await getUser({
    email
  });

  if (Usermail) {
    req.flash('error_msg', 'El correo ya esta registrado.');
    res.redirect('/signup');
    return;
  }

  ;
  newUser.password = await _helpers.default.encryptPassword(password);
  createUser(newUser).then(req.flash('success_msg', `Cuenta creada exitosamente.`), res.redirect('/login')).catch(function (err) {
    // print the error details
    console.log(err);
  });
}); // router.post('/signup',passport.authenticate('local.signup', {
//     successRedirect: '/',
//     FailureRedirect: '/signup',
//     FailureFlash: true
//   }));

module.exports = router;