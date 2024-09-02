const Bill = require('../models/billModel');
const GenericService = require('./genericService');

class BillService extends GenericService {
  constructor() {
    super(Bill);
  }
}

module.exports = new BillService();
