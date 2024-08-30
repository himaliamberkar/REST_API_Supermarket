const { Sequelize } = require('sequelize');
const sequelize = require('../database');

class TransactionService {
  async runTransaction(callback) {
    const transaction = await sequelize.transaction();

    try {
      const result = await callback(transaction);
      await transaction.commit();
      return result;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}

module.exports = new TransactionService();
