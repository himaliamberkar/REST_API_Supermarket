// routes/customerRoutes.js
const createRoutes = require('./genericRoutes');
const CustomerController = require('../controllers/customerController');

const customerRoutes = createRoutes(CustomerController);

module.exports = customerRoutes;
