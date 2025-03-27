const { getVatReport } = require('../services/VatReport.service');

module.exports = {
    getVatReport: (req, res) => {
        getVatReport((err, results) => {
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