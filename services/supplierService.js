// services/SupplierService.js
const Supplier = require('../models/supplierModels');
const GenericService = require('./genericService');

class SupplierService extends GenericService {
  constructor() {
    super(Supplier);
  }
}

module.exports = new SupplierService();
