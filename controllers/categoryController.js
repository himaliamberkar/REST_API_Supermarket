// controllers/categoryController.js
const CategoryService = require('../services/categoryService');
const GenericController = require('./genericController');

class CategoryController extends GenericController {
  constructor() {
    super(CategoryService);
  }
}

module.exports = new CategoryController();
