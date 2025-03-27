const { getIncomeReport } = require('../services/IncomeReport.service');

module.exports = {
    getIncomeReport: (req, res) => {
        getIncomeReport((err, results) => {
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