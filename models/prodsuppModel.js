
const { Sequelize, DataTypes } = require('sequelize');
const Product = require('./productModel');
const Supplier = require('./supplierModel');
const sequelize = require('../database');

const ProdSupp = sequelize.define('ProdSupp', {
  prod_supp_id: {
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
  supp_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Supplier,
      key: 'supp_id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    allowNull: true,
  },
}, {
  timestamps: true,
});

module.exports = ProdSupp;
