const express = require('express');
const controller = require('../controllers/ProfileController');
const routes = express.Router();

routes.get('/incidents', controller.incidents);

module.exports = routes;
