'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CustProd', {
      cust_prod: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      cust_id: {
        type: Sequelize.INTEGER,
        allowNull: true, // Allow NULL to accommodate SET NULL on delete/update
        references: {
          model: 'Customers', // The name of the referenced table
          key: 'cust_id', // The primary key in the Customers table
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      prod_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Products', // The name of the referenced table
          key: 'prod_id', // The primary key in the Products table
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CustProd');
  },
};
