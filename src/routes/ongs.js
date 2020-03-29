const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const controller = require('../controllers/OngController');
const routes = express.Router();

routes.get('/', controller.index);
routes.get('/:ong_id/incidents', controller.incidents);
routes.post('/', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        cellphone: Joi.string().required().length(11),
        city: Joi.string().required(),
        uf: Joi.string().length(2),
    })
}), controller.store);

module.exports = routes;
