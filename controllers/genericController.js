const transactionService = require('../services/transactionService');
const genericService = require('../services/genericService');

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

  async getAll(req, res) {
    try {
      const result = await this.service.findAll();
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
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
