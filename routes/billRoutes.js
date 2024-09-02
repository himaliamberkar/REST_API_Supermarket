// routes/billRoutes.js
const createRoutes = require('./genericRoutes');
const BillController = require('../controllers/billController');

const billRoutes = createRoutes(BillController);

module.exports = billRoutes;
