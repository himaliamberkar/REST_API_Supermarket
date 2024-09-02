
const express = require('express');
const User = require('../models/usersModel');
const Category = require('../models/categoryModel');
const Product = require('../models/productModel');
const Customer = require('../models/customerModel');
const EmpCustomer = require('../models/empcustModel');
const Supplier = require('../models/supplierModel');
const ProdSupp = require('../models/prodsuppModel');
const Bill = require('../models/billModel');
const CustProd = require('../models/custprodModel');
const Employee = require("../models/empModel");

const setupRoutes = require('./genericRoutes');

const router = express.Router();

router.use('/users', setupRoutes(User, '/users'));
router.use('/categories', setupRoutes(Category, '/categories'));
router.use('/products', setupRoutes(Product, '/products'));
router.use('/customers', setupRoutes(Customer, '/customers'));
router.use('/emp-customers', setupRoutes(EmpCustomer, '/emp-customers'));
router.use('/suppliers', setupRoutes(Supplier, '/suppliers'));
router.use('/prod-supps', setupRoutes(ProdSupp, '/prod-supps'));
router.use('/bills', setupRoutes(Bill, '/bills'));
router.use('/cust-prods', setupRoutes(CustProd, '/cust-prods'));
router.use('/employees', setupRoutes(Employee, '/employees'));

module.exports = router;
