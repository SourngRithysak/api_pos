const { vatFilterByDate } = require('../controllers/vatFilterByDate.controller');
const vatFilterByDateRouter = require('express').Router();

vatFilterByDateRouter.get('/', vatFilterByDate);

module.exports = vatFilterByDateRouter;