// controllers/employeeController.js
const EmployeeService = require('../services/EmployeeService');
const GenericController = require('./genericController');

class EmployeeController extends GenericController {
  constructor() {
    super(EmployeeService);
  }
}

module.exports = new EmployeeController();
