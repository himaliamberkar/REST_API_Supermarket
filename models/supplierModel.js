const { Sequelize, DataTypes } = require('sequelize');


const Supplier = sequelize.define('Supplier', {
  supp_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
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

module.exports = Supplier;
