// controllers/supplierController.js
const SupplierService = require('../services/supplierService');
const GenericController = require('./genericController');

class SupplierController extends GenericController {
  constructor() {
    super(SupplierService);
  }
}

module.exports = new SupplierController();
