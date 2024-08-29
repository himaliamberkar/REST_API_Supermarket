const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Category = sequelize.define('Category', {
  cate_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  c_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = Category;
