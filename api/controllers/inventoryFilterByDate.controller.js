const { inventoryFilterByDate } = require('../services/inventoryFilterByDate.service');

module.exports = {
    inventoryFilterByDate: (req, res) => {

        const start_date = req.query.start_date;
        const end_date = req.query.end_date;

        if (!start_date || !end_date) {
            return res.status(400).json({
                success: 0,
                message: "Start date and end date are required"
            });
        }

        inventoryFilterByDate(start_date, end_date, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error retrieving records"
                });
            }

            if (results.length === 0) {
                return res.status(404).json({
                    success: 0,
                    message: "No records found for the given date range!"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    }
}