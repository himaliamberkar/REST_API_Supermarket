// controllers/billController.js
const BillService = require('../services/billService');
const GenericController = require('./genericController');

class BillController extends GenericController {
  constructor() {
    super(BillService);
  }
}

module.exports = new BillController();
