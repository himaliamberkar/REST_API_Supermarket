
const employee = require('../models/empModel');
const GenericService = require('./genericService');

class EmployeeService extends GenericService {
  constructor() {
    super(Employee);
  }
}

module.exports = new EmployeeService();
