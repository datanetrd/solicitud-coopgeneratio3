"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _dbconfig = require("../config/dbconfig");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var oficinas = _dbconfig.sequelize.define('oficinas', {
  santodomingo: {
    type: _sequelize["default"].TEXT
  },
  santiago: {
    type: _sequelize["default"].TEXT
  },
  constanza: {
    type: _sequelize["default"].TEXT
  },
  sanfrancisco: {
    type: _sequelize["default"].TEXT
  }
}, {
  createdAt: false,
  updatedAt: false
});

var _default = oficinas;
exports["default"] = _default;