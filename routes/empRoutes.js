// routes/employeeRoutes.js
const createRoutes = require('./baseRoutes');
const EmployeeController = require('../controllers/empController');

const employeeRoutes = createRoutes(EmployeeController);

module.exports = employeeRoutes;
