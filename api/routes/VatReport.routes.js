const { getVatReport } = require('../controllers/VatReport.controller');
const vatReportRouter = require('express').Router();

vatReportRouter.get('/', getVatReport);

module.exports = vatReportRouter;