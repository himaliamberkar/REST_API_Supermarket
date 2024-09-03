const sequelize = require('../database');

class GenericService {
  constructor(model) {
    this.model = model;
  }

  async create(data, transaction) {
    try {
      return await this.model.create(data, { transaction });
    } catch (error) {
      throw new Error(`Error creating record: ${error.message}`);
    }
  }

  async findAll({ where = {}, limit = null, offset = null } = {}) {
    try {
      return await this.model.findAndCountAll({ where, limit, offset });
    } catch (error) {
      throw new Error(`Error retrieving records: ${error.message}`);
    }
  }

  async findById(id) {
    try {
        // Find the record by primary key using findByPk
        const record = await this.model.findByPk(id);
        
        console.log("record:", record);
        
        if (!record) {
            throw new Error('Record not found');
        }
        
        return record;
    } catch (error) {
        throw new Error(`Error finding record with id ${id}: ${error.message}`);
    }
}


  async update(id, data, transaction) {
    try {
      const record = await this.findById(id);
      console.log("record : ", record);
      return await record.update(data, { transaction });
    } catch (error) {
      throw new Error(`Error updating record with id ${id}: ${error.message}`);
    }
  }

  async delete(id) {
    try {
      const record = await this.findById(id);
      await record.destroy();
    } catch (error) {
      throw new Error("Error Deleting");
    }
  }
}

module.exports = GenericService;

