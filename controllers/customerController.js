// controllers/customerController.js
const CustomerService = require('../services/customerService');
const GenericController = require('./genericController');

class CustomerController extends GenericController {
  constructor() {
    super(CustomerService);
  }
}

module.exports = new CustomerController();
