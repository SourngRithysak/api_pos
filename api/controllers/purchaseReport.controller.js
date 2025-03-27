const { getPurchaseReport } = require('../services/purchaseReport.service');

module.exports = {
    getPurchaseReport: (req, res) => {
        getPurchaseReport((err, results) => {
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