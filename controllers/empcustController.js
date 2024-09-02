// controllers/empCustomerController.js
const EmpCustomerService = require('../services/EmpCustomerService');
const GenericController = require('./genericController');

class EmpCustomerController extends GenericController {
  constructor() {
    super(EmpCustomerService);
  }
}

module.exports = new EmpCustomerController();
