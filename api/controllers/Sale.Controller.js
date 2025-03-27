const { createSale, getSale } = require('../services/Sale.service');

module.exports = {
    createSale: (req, res) => {
        const body = req.body;
        createSale(body, (err) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Sale created fail!"
                });
            }
            return res.status(201).json({
                success: 1,
                message: "Sale created successfully."
            });
        });
    },
    getSale: (req, res) => {
        getSale((err, results) => {

            if(err){
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
    }
}