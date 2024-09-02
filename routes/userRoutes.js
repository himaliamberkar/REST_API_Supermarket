// const express = require("express");
// const {createUser, getAllUsers, getUserById, updateUser, deleteUser} = require("../controllers/userController.js");
// const router = express.Router();

// router
// .route("/")
// //   .get(userController.getAllUsers)
//   .post(createUser)
//   .get( getAllUsers);
  


// router
//   .route("/:id")
//   .get(getUserById)
//   .patch(updateUser)
//   .delete(deleteUser);
 
// module.exports = router;



// routes/userRoutes.js
const createRoutes = require('./genericRoutes');
const UserController = require('../controllers/userController');

const userRoutes = createRoutes(UserController);

module.exports = userRoutes;
