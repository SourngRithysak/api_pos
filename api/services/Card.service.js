const pool = require('../../config/database');

module.exports = {
    createCard: (data, callBack) => {
        pool.query(
            `insert into sdlc_pos.tbl_card_type(user_id, card_name, duration_months, expiry_date, description, status) values(?,?,?,?,?,?)`,
            [
                data.user_id,
                data.card_name,
                data.duration_months,
                data.expiry_date,
                data.description,
                data.status
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getCard: callBack => {
        pool.query(
            `select * from tbl_card_type`,
            [

            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateCard: (data, callBack) => {
        pool.query(
            `update tbl_card_type set user_id = ?, card_name = ?, duration_months = ?, expiry_date = ?, description = ?, status = ? where id = ?`,
            [
                data.user_id,
                data.card_name,
                data.duration_months,
                data.expiry_date,
                data.description,
                data.status,
                data.id
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error)
                }
                return callBack(null, results);
            }
        );
    }
}