// routes/empCustomerRoutes.js
const createRoutes = require('./genericRoutes');
const EmpCustomerController = require('../controllers/empcustController');

const empCustomerRoutes = createRoutes(EmpCustomerController);

module.exports = empCustomerRoutes;
