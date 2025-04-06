const { incomeFilterByDate } = require('../controllers/incomeFilterByDate.controller');
const incomeFilterByDateRouter = require('express').Router();

incomeFilterByDateRouter.get('/', incomeFilterByDate);

module.exports = incomeFilterByDateRouter;