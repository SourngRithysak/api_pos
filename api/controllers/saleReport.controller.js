const { getSaleReport } = require('../services/saleReport.service');

module.exports = {
    getSaleReport: (req, res) => {
        getSaleReport((err, results) => {
            if (err) {
                console.log(err);
                return;
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
}