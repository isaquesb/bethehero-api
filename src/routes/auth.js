const express = require('express');
const controller = require('../controllers/AuthController');
const routes = express.Router();

routes.post('/login', controller.login);
routes.get('/user', controller.user);

module.exports = routes;
