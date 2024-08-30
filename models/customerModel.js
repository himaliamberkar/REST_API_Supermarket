const { Sequelize, DataTypes } = require('sequelize');
const User = require('./usersModel');
const sequelize = require('../database');

const Customer = sequelize.define('Customer', {
  cust_id: {
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
}, {
  timestamps: true,
});

module.exports = Customer;