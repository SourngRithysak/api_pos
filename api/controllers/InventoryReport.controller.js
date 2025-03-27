const { getInventoryReport } = require('../services/InventoryReport.service');

module.exports = {
    getInventoryReport: (req, res) => {
        getInventoryReport((err, results) => {
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