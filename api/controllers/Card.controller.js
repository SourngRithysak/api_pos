const { createCard, updateCard, getCard } = require('../services/Card.service');

module.exports = {
    createCard: (req, res) => {
        const body = req.body;
        createCard(body, (err, results) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Card created fail!"
                });
            }
            return res.status(201).json({
                success: 1,
                message: "Card created successfully."
            });
        });
    },
    getCard: (req, res) => {
        getCard((err, results) => {

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
    },
    updateCard: (req, res) => {
        const body = req.body;
        updateCard(body, (err, results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.status(200).json({
                success: 1,
                message: "Card updated successfully."
            });
        });
    }
}