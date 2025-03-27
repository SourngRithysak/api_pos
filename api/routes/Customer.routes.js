const { createCustomer, getCustomer } = require('../controllers/Customer.controller');
const customerRouter = require('express').Router();

customerRouter.post('/', createCustomer);
customerRouter.get('/', getCustomer);

module.exports = customerRouter;