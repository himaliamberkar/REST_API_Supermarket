// controllers/prodSuppController.js
const ProdSuppService = require('../services/prodsuppService');
const GenericController = require('./genericController');

class ProdSuppController extends GenericController {
  constructor() {
    super(ProdSuppService);
  }
}

module.exports = new ProdSuppController();
