// const transactionService = require('../services/transactionService');
// const genericService = require('../services/genericService');
// // const Users= require('../models/usersModel');
// // const Category = require('../models/categoryModel');
// const models = {
//   users: require('../models/usersModel'),
//   categories: require('../models/categoryModel'),
//   products: require('../models/productModel'),
//   customers: require('../models/customerModel'),
//   empCustomers: require('../models/empcustModel'),
//   suppliers: require('../models/supplierModel'),
//   prodSupps: require('../models/prodsuppModel'),
//   bills: require('../models/billModel'),
//   custProds: require('../models/custprodModel'),
//   employees: require('../models/empModel'),
// };
// const errorCodes = require('../services/StatusCodes')

// class genericController {
//   constructor(model) {
//     this.service = new genericService(model);
//   }

//   async create(req, res) {
//     try {
//       const result = await transactionService.runTransaction(async (transaction) => {
//         return this.service.create(req.body, transaction);
//       });
//       res.status(201).json(result);
//     } catch (err) {
//       res.status(400).json({ error: err.message });
//     }
//   }

  
// //    async getAll(req, res)  {
// //     try {
// //         const pageAsNumber = Number.parseInt(req.query.page);
// //         const sizeAsNumber = Number.parseInt(req.query.size);

// //         let page = 0;
// //         if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
// //             page = pageAsNumber;
// //         }

// //         let size = 1;
// //         if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < 10) {
// //             size = sizeAsNumber;
// //         }

// //         const users = await Users.findAndCountAll({
// //             limit: size,
// //             offset: page * size,
// //     });
// //         res.send({
// //             content: users.rows,
// //             totalPages: Math.ceil(users.count / size),
// //         });

// //     } catch (error) {
// //         res.status(500).send({ message: 'Failed to retrieve items', details: error.message });
// //     }
// // }


// async getAll({ page = 1, limit = 10, search = '' } = {}) {
//   try {
//       // Validate limit
//       limit = parseInt(limit, 10);
//       if (isNaN(limit) || limit < 1) {
//           limit = 10;
//       } else if (limit > 50) {
//           limit = 10;
//       }

//       const offset = (page - 1) * limit;
//       const whereClause = {};

//       if (search) {
//           whereClause[Op.or] = Object.keys(this.model.rawAttributes).map((key) => ({
//               [key]: { [Op.like]: `%${search}%` }
//           }));
//       }

//       const results = await this.model.findAndCountAll();
//       return {
//           status: errorCodes.OK,
//           result: {
//               totalItems: results.count,
//               totalPages: Math.ceil(results.count / limit),
//               currentPage: page,
//               data: results.rows,
//           },
//       };
//   } catch (err) {
//       console.error( err);
//       return {
//           error: err,
//       };
//   }
// }

//   async getById(req, res) {
//     try {
//       const result = await this.service.findById(req.params.id);
//       if (!result) return res.status(404).json({ error: 'Not found' });
//       res.status(200).json(result);
//     } catch (err) {
//       res.status(400).json({ error: err.message });
//     }
//   }

//   async update(req, res) {
//     try {
//       const result = await transactionService.runTransaction(async (transaction) => {
//         return this.service.update(req.params.id, req.body, transaction);
//       });
//       res.status(200).json(result);
//     } catch (err) {
//       res.status(400).json({ error: err.message });
//     }
//   }

//   async delete(req, res) {
//     try {
//       await transactionService.runTransaction(async (transaction) => {
//         return this.service.delete(req.params.id, transaction);
//       });
//       res.status(204).end();
//     } catch (err) {
//       res.status(400).json({ error: err.message });
//     }
//   }
// }

// module.exports = genericController;


const transactionService = require('../services/transactionService');
const genericService = require('../services/genericService');
const { Op } = require('sequelize');
const {SERVER_ERROR, OK} = require('../services/StatusCodes');

class GenericController {
  constructor(model) {
    this.service = new genericService(model);
    this.model = model; // Initialize the model
  }

  async create(req, res) {
    try {
      const result = await transactionService.runTransaction(async (transaction) => {
        return this.service.create(req.body, transaction);
      });
      res.status(errorCodes.CREATED).json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getFiltered(req, res) {
    try {
      const page = parseInt(req.query.page, 10) || 1;
      const limit = parseInt(req.query.limit, 10) || 10;
      const search = req.query.search || '';
      const order = req.query.order || 'ASC';
      const sort = req.query.sort || 'user_id';

      // Validate and set default limit
      const validLimit = Math.min(Math.max(parseInt(limit, 10), 1), 50);
      const validOrder = order.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

      const offset = (page - 1) * validLimit;
      const whereClause = {};

      if (search) {
        whereClause[Op.or] = Object.keys(this.model.rawAttributes).map((key) => ({
          [key]: { [Op.like]: `%${search}%` },
        }));
      }

      const results = await this.model.findAndCountAll({
        where: whereClause,
        limit: validLimit,
        offset: offset,
        order:[[sort, validOrder]]
      });

      res.status(OK).json({
        totalItems: results.count,
        totalPages: Math.ceil(results.count / validLimit),
        currentPage: page,
        data: results.rows,
      });
    } catch (err) {
      console.error(err);
      res.status(SERVER_ERROR).json({ error: 'Failed to retrieve items', details: err.message });
    }
  }

  async getAll(req,res){
    try {
      const data = await this.service.findAll();
      if (!data) {
        throw new Error("Not found")
      } return res.status(OK).json({message:"Found", data})
    } catch (error) {
      res.status(SERVER_ERROR).json({message:err.message});
    }
  }

  async getById(req, res) {
    try {
      const result = await this.service.findById(req.params.id);
      if (!result) return res.status(errorCodes.NOT_FOUND).json({ error: 'Not found' });
      res.status(OK).json(result);
    } catch (err) {
      res.status(SERVER_ERROR).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const result = await transactionService.runTransaction(async (transaction) => {
        return this.service.update(req.params.id, req.body, transaction);

      });
      res.status(OK).json(result);
    } catch (err) {
      res.status(SERVER_ERROR).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      await transactionService.runTransaction(async (transaction) => {
         return this.service.delete(req.params.id, transaction);

        });
        res.status(OK).json({message:"Deleted"});
    } catch (err) {
      res.status(SERVER_ERROR).json({ error: err.message });
    }
  }
}

module.exports = GenericController;
