// routes/custProdRoutes.js
const createRoutes = require('./genericRoutes');
const CustProdController = require('../controllers/custprodController');

const custProdRoutes = createRoutes(CustProdController);

module.exports = custProdRoutes;
