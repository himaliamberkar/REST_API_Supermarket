const Sequelize = require("sequelize");const sequelize = new Sequelize(
    "new_schema",
    "root",
    "rootuser",
    {
      dialect: "mysql",
      port: 8000,
      host: "localhost",
    }
  );

  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection success");
    })
    .catch((err) => {
      console.log(err);
    });
  
  sequelize.sync();

  module.exports = sequelize;