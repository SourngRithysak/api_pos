const { getInventoryReport } = require('../controllers/InventoryReport.controller');
const inventoryReportRouter = require('express').Router();

inventoryReportRouter.get('/', getInventoryReport);

module.exports = inventoryReportRouter;