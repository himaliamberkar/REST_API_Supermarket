const transactionService = require('../services/transactionService');
const genericService = require('../services/genericService');
const Users= require('../models/usersModel');
class genericController {
  constructor(model) {
    this.service = new genericService(model);
  }

  async create(req, res) {
    try {
      const result = await transactionService.runTransaction(async (transaction) => {
        return this.service.create(req.body, transaction);
      });
      res.status(201).json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  
   async getAll(req, res)  {
    try {
        const pageAsNumber = Number.parseInt(req.query.page);
        const sizeAsNumber = Number.parseInt(req.query.size);

        let page = 0;
        if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
            page = pageAsNumber;
        }

        let size = 1;
        if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < 10) {
            size = sizeAsNumber;
        }

        const users = await Users.findAndCountAll({
            limit: size,
            offset: page * size,
    });
        console.log(users.rows);
        res.send({
            content: users.rows,
            totalPages: Math.ceil(users.count / size),
        });

    } catch (error) {
        res.status(500).send({ message: 'Failed to retrieve items', details: error.message });
    }
}

  async getById(req, res) {
    try {
      const result = await this.service.findById(req.params.id);
      if (!result) return res.status(404).json({ error: 'Not found' });
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const result = await transactionService.runTransaction(async (transaction) => {
        return this.service.update(req.params.id, req.body, transaction);
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      await transactionService.runTransaction(async (transaction) => {
        return this.service.delete(req.params.id, transaction);
      });
      res.status(204).end();
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = genericController;
