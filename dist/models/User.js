"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _dbconfig = require("../config/dbconfig");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const User = _dbconfig.sequelize.define('users', {
  _id: {
    type: _sequelize.default.INTEGER,
    primaryKey: true
  },
  user_name: {
    type: _sequelize.default.TEXT,
    allowNull: false
  },
  email: {
    type: _sequelize.default.TEXT,
    allowNull: false,
    unique: true
  },
  password: {
    type: _sequelize.default.TEXT,
    allowNull: false
  },
  role: {
    type: _sequelize.default.STRING,
    defaultValue: 'regular',
    values: ['regular', 'admin']
  }
}, {
  freezeTableName: true,
  createdAt: false,
  updatedAt: false
});

User.removeAttribute('id');
var _default = User;
exports.default = _default;