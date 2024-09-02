// routes/prodSupplierRoutes.js
const createRoutes = require('./genericRoutes');
const ProdSupplierController = require('../controllers/prodsuppController');

const prodSupplierRoutes = createRoutes(ProdSupplierController);

module.exports = prodSupplierRoutes;
