const { saleFillterByDate } = require('../services/saleFilterByDate.service');

module.exports = {
    saleFillterByDate: (req, res) => {
        const body = req.body;
        saleFillterByDate(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database error!",
                });
            }

            if (!results.length) {
                return res.status(404).json({
                    success: 0,
                    message: "Record not found!",
                });
            }

            return res.status(200).json({
                success: 1,
                data: results,
            });
        });

    }
}