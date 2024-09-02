// const { Sequelize } = require('sequelize');
const sequelize = require('../database');

class genericService {
  constructor(model) {
    this.model = model;
  }

  async create(data, transaction) {
    return this.model.create(data, { transaction });
  }

  async findAll() {
    return this.model.findAll();
  }

  async findById(id) {
    return this.model.findByPk(id);
  }

  async update(id, data, transaction) {
    const record = await this.findById(id);
    if (!record) throw new Error('Record not found');
    return record.update(data, { transaction });
  }

  async delete(id, transaction) {
    const record = await this.findById(id);
    if (!record) throw new Error('Record not found');
    return record.destroy({ transaction });
  }
}

module.exports = genericService;
