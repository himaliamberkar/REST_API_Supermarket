// // sequelize.sync({ force: true });
// const express = require("express");
// const app = express();
// const userRouter = require("./routes/userRotues");
// // middleware for post request
// app.use(express.json());

// // ROUTES
// app.use("/api/user", userRouter);
// module.exports = app;

const express = require('express');
const app = express();
const mainRouter = require('./routes/baseRoutes');

app.use(express.json());
app.use('/api', mainRouter);

module.exports = app;
