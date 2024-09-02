// controllers/productController.js
const ProductService = require('../services/productService');
const GenericController = require('./genericController');

class ProductController extends GenericController {
  constructor() {
    super(ProductService);
  }
}

module.exports = new ProductController();
