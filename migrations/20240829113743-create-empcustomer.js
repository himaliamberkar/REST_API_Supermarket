'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('EmpCustomer', {
      emp_customer_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      emp_id: {
        type: Sequelize.INTEGER,
        allowNull: true,  // Allow NULL to accommodate SET NULL on delete/update
        references: {
          model: 'Employees',
          key: 'emp_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      cust_id: {
        type: Sequelize.INTEGER,
        allowNull: true,  // Allow NULL to accommodate SET NULL on delete/update
        references: {
          model: 'Customers',
          key: 'cust_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
      createdBy: {
        type: Sequelize.STRING,
      },
      updatedBy: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      deletedBy: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      deletedAt: {
        type: Sequelize.INTEGER,
        defaultValue: null,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('EmpCustomer');
  },
};

