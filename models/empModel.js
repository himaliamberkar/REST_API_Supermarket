const { Sequelize, DataTypes } = require('sequelize');
const User = require('./usersModel');
const sequelize = require('../database');

const Employee = sequelize.define('Employee', {
  emp_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'user_id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    allowNull: true,
  },
  salary: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = Employee;