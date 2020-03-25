const express = require('express');
const controller = require('../controllers/IncidentController');
const routes = express.Router();

routes.get('/', controller.index);
routes.post('/', controller.store);
routes.delete('/:id', controller.delete);

module.exports = routes;
