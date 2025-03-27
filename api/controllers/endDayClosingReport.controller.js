const { getEndDayClosingReport } = require('../services/endDayClosingReport.service');

module.exports = {
    getEndDayClosingReport: (req, res) => {
        getEndDayClosingReport((err, results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    }
}