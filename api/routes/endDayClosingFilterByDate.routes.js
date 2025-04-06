const { endDayClosingFilterByDate } = require('../controllers/endDayClosingFilterByDate.controller');
const endDayClosingFilterByDateRouter = require('express').Router();

endDayClosingFilterByDateRouter.get('/', endDayClosingFilterByDate);

module.exports = endDayClosingFilterByDateRouter;