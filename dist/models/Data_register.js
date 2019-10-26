"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _dbconfig = require("../config/dbconfig");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DataRegister = _dbconfig.sequelize.define('data_registers', {
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
  cedula: {
    type: _sequelize["default"].TEXT
  },
  estadocivil: {
    type: _sequelize["default"].TEXT
  },
  direccionresidencial: {
    type: _sequelize["default"].TEXT
  },
  provincia: {
    type: _sequelize["default"].TEXT
  },
  telefonos: {
    type: _sequelize["default"].TEXT
  },
  celular: {
    type: _sequelize["default"].TEXT
  },
  oficinatrabajo: {
    type: _sequelize["default"].TEXT
  },
  direcciontrabajo: {
    type: _sequelize["default"].TEXT
  },
  telefonotrabajo: {
    type: _sequelize["default"].TEXT
  },
  fax: {
    type: _sequelize["default"].TEXT
  },
  puesto: {
    type: _sequelize["default"].TEXT
  },
  fechaingresoempresa: {
    type: _sequelize["default"].TEXT
  },
  sueldo: {
    type: _sequelize["default"].TEXT
  },
  email: {
    type: _sequelize["default"].TEXT
  },
  ahorromensual: {
    type: _sequelize["default"].TEXT
  },
  certificadoaportacion: {
    type: _sequelize["default"].TEXT
  },
  valorcertificado: {
    type: _sequelize["default"].TEXT
  },
  nombre2: {
    type: _sequelize["default"].TEXT
  },
  apellido2: {
    type: _sequelize["default"].TEXT
  },
  cedula2: {
    type: _sequelize["default"].TEXT
  },
  socio_ID: {
    type: _sequelize["default"].INTEGER
  },
  nuevosSocioId: {
    type: _sequelize["default"].INTEGER
  }
}, {
  freezeTableName: true,
  // createdAt: false,
  updatedAt: false
});

var _default = DataRegister;
exports["default"] = _default;