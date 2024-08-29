const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../database');

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  f_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  l_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  post: {
    type: DataTypes.ENUM('employee', 'customer', 'supplier'),
    allowNull: false,
  },
}, {
  timestamps: true,
  createdAt: true,
  updatedAt: true,
  createdBy: {
    type: DataTypes.STRING,
  },
  updatedBy: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
  deletedBy: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
});

module.exports = User;
