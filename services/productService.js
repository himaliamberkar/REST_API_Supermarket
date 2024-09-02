// services/ProductService.js
const Product = require('../models/productModel');
const GenericService = require('./genericService');

class ProductService extends GenericService {
  constructor() {
    super(Product);
  }
}

module.exports = new ProductService();
