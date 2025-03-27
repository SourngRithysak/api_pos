const { getInvoice,updateInvoice } = require('../services/Invoice.service');

module.exports = {
    getInvoice: (req, res) => {
        getInvoice((err, results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    updateInvoice: (req, res) => {
        const data = req.body;
        updateInvoice(data, (err, results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.status(200).json({
                success: 1,
                message: "Invoice has been updated successfully."
            });
        });
    }
}