"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _dbconfig = require("../config/dbconfig");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var oficinas = _dbconfig.sequelize.define('sucursal', {
  Oficina: {
    type: _sequelize["default"].TEXT
  },
  Email_Oficina: {
    type: _sequelize["default"].TEXT
  }
}, {
  primaryKey: false,
  freezeTableName: true,
  createdAt: false,
  updatedAt: false
});

oficinas.removeAttribute('id');
var _default = oficinas;
exports["default"] = _default;