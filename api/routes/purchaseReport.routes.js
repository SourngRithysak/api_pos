const { getPurchaseReport } = require('../controllers/purchaseReport.controller');
const purchaseReportRouter = require('express').Router();

purchaseReportRouter.get('/', getPurchaseReport);

module.exports = purchaseReportRouter;