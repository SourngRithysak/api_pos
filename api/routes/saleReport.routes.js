const { getSaleReport } = require('../controllers/saleReport.controller');
const saleReportRouter = require('express').Router();

saleReportRouter.get('/', getSaleReport);

module.exports = saleReportRouter;