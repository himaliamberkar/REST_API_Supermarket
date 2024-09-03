'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ProdSupp', {
      prod_supp: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      prod_id: {
        type: Sequelize.INTEGER,
        allowNull: true, // Allow NULL to accommodate SET NULL on delete/update
        references: {
          model: 'Products', // The name of the referenced table
          key: 'prod_id', // The primary key in the Products table
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      supp_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Suppliers', // The name of the referenced table
          key: 'supp_id', // The primary key in the Suppliers table
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT', // or CASCADE, depending on your desired behavior
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      deletedAt: {
        type: Sequelize.INTEGER,
        defaultValue: null,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ProdSupp');
  },
};
