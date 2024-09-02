// services/CategoryService.js
const Category = require('../models/categoryModel');
const GenericService = require('./genericService');

class categoryService extends GenericService {
  constructor() {
    super(Category);
  }
}

module.exports = new categoryService();
