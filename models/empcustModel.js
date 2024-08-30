const { Sequelize, DataTypes } = require('sequelize');
const Employee = require('./empModel');
const Customer = require('./customerModel');
const sequelize = require('../database');

const EmpCustomer = sequelize.define('EmpCustomer', {
  emp_customer_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  emp_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Employee,
      key: 'emp_id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    allowNull: true,
  },
  cust_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Customer,
      key: 'cust_id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    allowNull: true,
  },
}, {
  timestamps: true,
});

module.exports = EmpCustomer;