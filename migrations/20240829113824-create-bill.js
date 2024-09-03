'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bill', {
      bill_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      prod_id: {
        type: Sequelize.INTEGER,
        allowNull: true, // Allow NULL to accommodate SET NULL on delete
        references: {
          model: 'Products', // The name of the referenced table
          key: 'prod_id', // The primary key in the Products table
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', // The name of the referenced table
          key: 'user_id', // The primary key in the Users table
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT', // or CASCADE, depending on your desired behavior
      },
      cust_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Customers', // The name of the referenced table
          key: 'cust_id', // The primary key in the Customers table
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT', // or CASCADE, depending on your desired behavior
      },
      bill_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('Bill');
  },
};
