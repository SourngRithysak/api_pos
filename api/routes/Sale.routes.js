const { createSale, getSale } = require('../controllers/Sale.Controller');
const saleRouter = require('express').Router();

saleRouter.post('/', createSale);
saleRouter.get('/', getSale);

module.exports = saleRouter;