// routes/productRoutes.js
const createRoutes = require('./genericRoutes');
const ProductController = require('../controllers/productController');

const productRoutes = createRoutes(ProductController);

module.exports = productRoutes;
