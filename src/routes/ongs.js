const express = require('express');
const controller = require('../controllers/OngController');
const routes = express.Router();

routes.get('/', controller.index);
routes.get('/:ong_id/incidents', controller.incidents);
routes.post('/', controller.store);

module.exports = routes;
