"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jwtAuth = jwtAuth;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _User = _interopRequireDefault(require("../models/User"));

var _helpers = _interopRequireDefault(require("../config/helpers/helpers"));

var _config = require("../config/config");

var _regeneratorRuntime = require("regenerator-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const getUser = async obj => {
  return await _User.default.findOne({
    where: obj
  });
};

async function jwtAuth(req, res, next) {
  let jwtOptions = {};
  jwtOptions.secretOrKey = process.env.SECRET_OR_KEY;
  const {
    email,
    password
  } = req.body;

  if (email && password) {
    let user = await getUser({
      email
    });

    if (!user) {
      req.flash('error_msg', 'Usuario no encontrado.');
      res.redirect('/');
    }

    const validPass = await _helpers.default.matchPassword(password, user.password);

    if (validPass) {
      let payload = {
        id: user._id,
        email: user.email,
        role: user.role
      };

      let token = _jsonwebtoken.default.sign(payload, jwtOptions.secretOrKey, _config.expiratejwt);

      res.cookie('SystemAuth', token, {
        httpOnly: true,
        secure: false,
        maxAge: 3600000
      });
      console.log(token);
      req.flash('success_msg', `Ha iniciado sesión exitosamente. ${user.user_name} `);
      res.redirect('/');
    } else {
      req.flash('error_msg', 'Contraseña incorrecta.');
      res.redirect('/login');
    }
  }

  next();
}

module.exports = {
  jwtAuth
};