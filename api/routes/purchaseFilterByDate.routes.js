const { purchaseFilterByDate } = require('../controllers/purchaseFilterByDate.controller');
const purchaseFilterByDateRouter = require('express').Router();

purchaseFilterByDateRouter.get('/', purchaseFilterByDate);

module.exports = purchaseFilterByDateRouter;