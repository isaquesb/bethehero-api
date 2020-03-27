const express = require('express');
const routes = express.Router();

routes.use('/auth', require('./auth'));
routes.use('/ongs', require('./ongs'));
routes.use('/incidents', require('./incidents'));
routes.use('/profile', require('./profile'));

module.exports = routes;
