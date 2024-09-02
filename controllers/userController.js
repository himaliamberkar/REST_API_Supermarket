// const userService = require('../services/userService');
// const error= require('../services/StatusCodes');
// exports.createUser = async (req, res, next) => {
//     console.log(req.body); 
//     try {
//       const user = await userService.createUser(req.body);
//       console.log(user);
  
//       res.status(200).send(user);
//     } catch (err) {
//       res.status(404).send(error.error);
//     }
//     next();
//   };

//   exports.getAllUsers = async (req, res) => {
//     try {
//       const users = await userService.getAllUsers();
//       res.status(200).json(users); 
//     } catch (err) {
//       // res.status(400).json({ error: err.message }); 
//       res.status(404).send(error.error);
//     }
//   };


// exports.getUserById = async (req, res) => {
//   try {
//     const user = await userService.getUserById(req.params.id);
//     // console.log(req.params.id)
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' }); // Respond with a 404 status if user is not found
//     }
//     res.status(200).json(user); // Respond with the user data and a 200 status
//   } catch (err) {
//     res.status(404).send(error.error); // Respond with error message and a 400 status
//   }
// };


// exports.updateUser = async (req, res) => {
//   try {
//     const id=req.params.id
//     // console.log(id)
//     const updatedUser = await userService.updateUser(id, req.body);
//     res.status(200).json(updatedUser); // Respond with the updated user data and a 200 status
//   } catch (err) {
//     res.status(404).send(error.error); 
//   }
// };

// exports.deleteUser = async (req, res) => {
//   try {
//     const result = await userService.deleteUser(req.params.id);
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(404).send(error.error);
//   }
// };

// controllers/userController.js
const UserService = require('../services/userService');
const GenericController = require('./genericController');

class UserController extends GenericController {
  constructor() {
    super(UserService);
  }
}

module.exports = new UserController();
