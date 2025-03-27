const { createCustomer, getCustomer } = require('../services/Customer.service');

module.exports = {
    createCustomer: (req, res) => {
        const body = req.body;
        createCustomer(body, (err) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Customer created fail!"
                });
            }
            return res.status(201).json({
                success: 1,
                message: "Customer created successfully."
            });
        });
    },
    getCustomer: (req, res) => {
        getCustomer((err, results) => {

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