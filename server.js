require('dotenv').config();
const express = require('express')
const app = require('./app')

const sequelize = require("./database");
const Empolyee = require("./models/empModel");
const Category = require("./models/categoryModel");
const Product = require("./models/productModel");
const Customer = require("./models/customerModel");
const empCustomer = require("./models/empcustModel");
const Supplier = require("./models/supplierModel");
const prodSupplier = require("./models/prodsuppModel");
const Bill = require("./models/billModel");
const custProduct = require("./models/custprodModel");
sequelize.sync();

//middleware
app.use(express.json())
//testing
app.get('/',(req,res)=>{
    res.json({message: 'hello from api'})
})

//port
const PORT = process.env.PORT;

//server
app.listen(PORT,() =>{
    console.log(`server is running on port ${PORT}`)
})