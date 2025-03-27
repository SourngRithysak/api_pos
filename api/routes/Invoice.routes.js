const { getInvoice,updateInvoice } = require('../controllers/Invoice.controller');
const invoiceRouter = require('express').Router();

invoiceRouter.get('/', getInvoice);
invoiceRouter.patch('/', updateInvoice);

module.exports = invoiceRouter;