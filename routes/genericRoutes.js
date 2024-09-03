// routes/genericRoutes.js
const express = require('express');
const genericController = require('../controllers/genericController');

function setupRoutes(model, path) {
  const router = express.Router();
  const controller = new genericController(model);

  router.post('/', controller.create.bind(controller));
  router.get('/', controller.getAll.bind(controller));
  router.get('/filter', controller.getFiltered.bind(controller));
  router.get('/:id', controller.getById.bind(controller));
  router.put('/:id', controller.update.bind(controller));
  router.delete('/:id', controller.delete.bind(controller));

  return router;
}

module.exports = setupRoutes;
