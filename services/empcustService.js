// services/EmpCustomerService.js
const EmpCustomer = require('../models/empcustModel');
const GenericService = require('./genericService');

class EmpCustomerService extends GenericService {
  constructor() {
    super(EmpCustomer);
  }
}

module.exports = new EmpCustomerService();
