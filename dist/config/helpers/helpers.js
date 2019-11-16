"use strict";

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _regeneratorRuntime = require("regenerator-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const helpers = {};

helpers.encryptPassword = async password => {
  const salt = await _bcryptjs.default.genSalt(10);
  const hash = await _bcryptjs.default.hash(password, salt);
  return hash;
};

helpers.matchPassword = async (password, savedPassword) => {
  try {
    return await _bcryptjs.default.compare(password, savedPassword);
  } catch (e) {
    console.log(e);
  }
};

module.exports = helpers;