const { getSaleReport } = require('../services/saleReport.service');

module.exports = {
    getSaleReport: (req, res) => {
        getSaleReport((err, results) => {

            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Record not found!"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
}