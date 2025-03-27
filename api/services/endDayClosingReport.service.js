const pool = require('../../config/database');

module.exports = {
    getEndDayClosingReport: callBack => {
        pool.query(
            `select id, closing_date, total_sale, total_member_dis, total_member_dis, total_exchange, total_difference, total_difference, total_vat, total_cash, total_card, remark from tbl_end_of_day_closing`,
            [],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
}