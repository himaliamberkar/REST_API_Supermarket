// services/ProdSuppService.js
const ProdSupp = require('../models/prodsuppModel');
const GenericService = require('./genericService');

class ProdSuppService extends GenericService {
  constructor() {
    super(ProdSupp);
  }
}

module.exports = new ProdSuppService();
