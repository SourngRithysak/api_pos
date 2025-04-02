const { saleFillterByDate } = require('../controllers/saleFillterByDate.controller');
const saleFillterByDateRouter = require('express').Router();

saleFillterByDateRouter.get('/', saleFillterByDate);

module.exports = saleFillterByDateRouter;