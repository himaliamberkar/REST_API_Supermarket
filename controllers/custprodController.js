// controllers/custProdController.js
const CustProdService = require('../services/custprodservice');
const GenericController = require('./genericController');

class CustProdController extends GenericController {
  constructor() {
    super(CustProdService);
  }
}

module.exports = new CustProdController();
