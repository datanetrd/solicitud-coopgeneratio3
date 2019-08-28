"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _dbconfig = require("../config/dbconfig");

var _Data_register = _interopRequireDefault(require("./Data_register"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var nuevoSocios = _dbconfig.sequelize.define('nuevos_socios', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  nombre: {
    type: _sequelize["default"].TEXT
  },
  apellido: {
    type: _sequelize["default"].TEXT
  },
  fecha_solicitud: {
    type: _sequelize["default"].DATE
  }
}, {
  timestamps: false,
  createdAt: false
});

nuevoSocios.hasMany(_Data_register["default"], {
  foreingKey: 'socio_ID',
  sourceKey: 'id'
});

_Data_register["default"].belongsTo(nuevoSocios, {
  foreingKey: 'socio_ID',
  sourceKey: 'id'
});

var _default = nuevoSocios;
exports["default"] = _default;