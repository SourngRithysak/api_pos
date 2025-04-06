const { inventoryFilterByDate } = require('../controllers/inventoryFilterByDate.controller');
const inventoryFilterByDateRouter = require('express').Router();

inventoryFilterByDateRouter.get('/', inventoryFilterByDate);

module.exports = inventoryFilterByDateRouter;