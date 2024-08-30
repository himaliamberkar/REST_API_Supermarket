
// const { Sequelize, DataTypes } = require('sequelize');
// const Dbconfig = require('../config/Dbconfig');

// const sequelize = new Sequelize(
//     Dbconfig.db,
//     Dbconfig.user,
//     Dbconfig.password,
//     {
//         host: Dbconfig.host,
//         dialect: Dbconfig.dialect
//     }
// );

// sequelize.authenticate().then(() => {
//     console.log('Connection has been established successfully.');
// }).catch(error => {
//     console.error('Unable to connect to the database:', error);
// });

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// // Import models
// db.User = require('./usersModel.js')(sequelize, DataTypes);
// db.Customer = require('./customerModel.js')(sequelize, DataTypes);
// db.Employee = require('./empModel.js')(sequelize, DataTypes);
// db.Supplier = require('./supplierModel.js')(sequelize, DataTypes);
// db.Category = require('./categoryModel.js')(sequelize, DataTypes);
// db.Product = require('./productModel.js')(sequelize, DataTypes);
// db.custProd= require('./custprodModel.js')(sequelize, DataTypes);
// db.empCust= require('./empcustModel.js')(sequelize, DataTypes);
// db.prodSupp= require('./prodsuppModel.js')(sequelize, DataTypes);
// db.Bill = require('./billModel.js')(sequelize, DataTypes);

// // Define associations
// Object.keys(db).forEach(modelName => {
//     if (db[modelName].associate) {
//         //db.associate();
//         db[modelName].associate
//     }
// });

// sequelize.sync({ force: false }).then(() => {
//     console.log("Re-sync is completed.");
// });

// module.exports = db;

