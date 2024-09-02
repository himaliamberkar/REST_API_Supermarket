// services/CustomerService.js
const customer = require('../models/customerModel');
const GenericService = require('./genericService');

class CustomerService extends GenericService {
  constructor() {
    super(Customer);
  }
}

module.exports = new CustomerService();
