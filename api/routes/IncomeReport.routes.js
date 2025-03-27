const { getIncomeReport } = require('../controllers/IncomeReport.controller');
const incomeReportRouter = require('express').Router();

incomeReportRouter.get('/', getIncomeReport);

module.exports = incomeReportRouter;