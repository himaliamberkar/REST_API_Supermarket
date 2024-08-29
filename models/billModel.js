const { Sequelize, DataTypes } = require('sequelize');
const Product = require('./productModel');
const Customer = require('./customerModel');
const User = require('./usersModel');
const sequelize = require('../../database');

const Bill = sequelize.define('Bill', {
  bill_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  prod_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'prod_id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    allowNull: true,
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
  bill_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = Bill;

