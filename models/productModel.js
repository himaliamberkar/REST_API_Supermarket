const { Sequelize, DataTypes } = require('sequelize');
const Category = require('./categoryModel');
const sequelize = require('../database');

const Product = sequelize.define('Product', {
  prod_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  p_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  stock_quantity: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  cate_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: 'cate_id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    allowNull: true,
  },
}, {
  timestamps: true,
});

module.exports = Product;