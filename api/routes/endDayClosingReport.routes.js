const { getEndDayClosingReport } = require('../controllers/endDayClosingReport.controller');
const endDayClosingReportRouter = require('express').Router();

endDayClosingReportRouter.get('/', getEndDayClosingReport);

module.exports = endDayClosingReportRouter;