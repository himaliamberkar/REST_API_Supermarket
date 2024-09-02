// services/CustProdService.js
const CustProd = require('../models/custprodModel');
const GenericService = require('./genericService');

class CustProdService extends GenericService {
  constructor() {
    super(CustProd);
  }
}

module.exports = new CustProdService();
