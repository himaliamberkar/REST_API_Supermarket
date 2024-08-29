const { Sequelize, DataTypes } = require('sequelize');
const Customer = require('./customerModel');
const Product = require('./productModel');
const sequelize = require('../../database');

const CustProd = sequelize.define('CustProd', {
  cust_prod_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
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
}, {
  timestamps: true,
});

module.exports = CustProd;
