// /// const User = require('../models/usersModel')

// // class userService{
// // createUser = (data) => {
// //     try {
// //       const { f_name,l_name,phone, age, post } = data;
// //       const usersData = { f_name,l_name,phone, age, post};
// //       const newUser = User.create(usersData);
// //       return newUser;
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };
// //   getAllUsers = () => {
// //     try {
// //       const users = User.findAll();
// //       return users;
// //     } catch (err) {
// //       console.log("Error retrieving users:", err);
// //     }
// //   };
// //   getUserById = (user_id) => {
// //     try {
// //       // Use Sequelize's findByPk method to get a user by primary key (ID)
// //       console.log(user_id)
// //       const user = User.findByPk(user_id);
// //       return user;
// //     } catch (err) {
// //       console.log("Error retrieving user:", err);
// //     }
// //   };
  
// //   updateUser = async (user_id, updateData) => {

// //     try {
// //       // Find the user by ID

// //       const user = await User.findByPk(user_id);
      
// //       // If user is not found, throw an error
// //       if (!user) {
// //         throw new Error('User not found');
// //       }
      
// //       // Update the user's data with the provided updateData
// //       const updatedUser = await user.update(updateData,{where:{user_id:user_id}});
// //       return updatedUser;
// //     } catch (err) {
// //       console.log("Error updating user:", err);
// //     }
// //   };

// //   deleteUser = async (user_id) => {
// //     try {
// //       // Find the user by ID
// //       const user = await User.findByPk(user_id);
      
// //       // If the user is not found, throw an error
// //       if (!user) {
// //         throw new Error('User not found');
// //       }
      
// //       // Delete the user record from the database
// //       await user.destroy();
      
// //       // Return a success message or some other indication of success
// //       return { message: 'User deleted successfully' };
// //     } catch (err) {
// //       console.log("Error deleting user:", err);
// //       throw err; // Optionally, rethrow the error to be handled by the calling function
// //     }
// //   };
  
  
  
// // }

// // module.exports= new userService

// const User = require('../models/usersModel');
// const transactionService = require('../services/transactionService');

// class UserService {
//   async createUser(data) {
//     return transactionService.runTransaction(async (transaction) => {
//       const { f_name, l_name, phone, age, post } = data;
//       const usersData = { f_name, l_name, phone, age, post };
//       const newUser = await User.create(usersData, { transaction });
//       return newUser;
//     });
//   }

//   async getAllUsers() {
//     return User.findAll();
//   }

//   async getUserById(user_id) {
//     return User.findByPk(user_id);
//   }

//   async updateUser(user_id, updateData) {
//     return transactionService.runTransaction(async (transaction) => {
//       const user = await User.findByPk(user_id, { transaction });

//       if (!user) {
//         throw new Error('User not found');
//       }

//       const updatedUser = await user.update(updateData, { transaction });
//       return updatedUser;
//     });
//   }

//   async deleteUser(user_id) {
//     return transactionService.runTransaction(async (transaction) => {
//       const user = await User.findByPk(user_id, { transaction });

//       if (!user) {
//         throw new Error('User not found');
//       }

//       await user.destroy({ transaction });
//       return { message: 'User deleted successfully' };
//     });
//   }
// }

// module.exports = new UserService();


// services/UserService.js
const User = require('../models/usersModel');
const GenericService = require('./genericService');

class UserService extends GenericService {
  constructor() {
    super(User);
  }

}

module.exports = new UserService();



