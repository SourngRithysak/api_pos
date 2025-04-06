const pool = require('../../config/database');

module.exports = {
    endDayClosingFilterByDate: (start_date, end_date, callBack) => {
        pool.query(
            `select id, closing_date, total_sale, total_member_dis, total_member_dis, total_exchange, total_difference, total_difference, total_vat, total_cash, total_card, remark from tbl_end_of_day_closing
            where date(closing_date) between ? and ?
            group by closing_date`,
            [start_date, end_date],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
}