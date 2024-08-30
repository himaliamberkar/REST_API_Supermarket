// sequelize.sync({ force: true });
const express = require("express");
const app = express();
const userRouter = require("./routes/userRotues");
// middleware for post request
app.use(express.json());

// ROUTES
app.use("/api/user", userRouter);
module.exports = app;
