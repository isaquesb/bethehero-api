const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const controller = require('../controllers/IncidentController');
const routes = express.Router();

routes.get('/', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number().min(1),
    })
}), controller.index);
routes.post('/', controller.store);
routes.delete('/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required().min(1),
    })
}), controller.delete);

module.exports = routes;
