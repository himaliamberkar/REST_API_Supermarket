// routes/supplierRoutes.js
const createRoutes = require('./genericRoutes');
const SupplierController = require('../controllers/supplierController');

const supplierRoutes = createRoutes(SupplierController);

module.exports = supplierRoutes;
