// routes/categoryRoutes.js
const createRoutes = require('./genericRoutes');
const CategoryController = require('../controllers/categoryController');

const categoryRoutes = createRoutes(CategoryController);

module.exports = categoryRoutes;
