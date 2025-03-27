const pool = require('../../config/database');

module.exports = {
    /* 
        * create sales
    */
    createSale: (data, callBack) => {
        pool.query(
            `insert into sdlc_pos.tbl_sale(branches_id, user_id, customer_id, card_id, sale_date, currency_rate, member_discount) values(?,?,?,?,?,?,?)`,
            [
                data.branches_id,
                data.user_id,
                data.customer_id,
                data.card_id,
                data.sale_date,
                data.currency_rate,
                data.member_discount
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    /* 
        * get sale 
    */
    getSale: callBack => {
        pool.query(
            `select sale.id, concat(branches.name, " , ", branches.address, " , ", branches.city, " , ", branches.country, " , ", branches.description) as branches, concat(u.role_name, " , ", u.username) as users, customer.customer_name, concat(card.card_name, " , ", card.duration_months, " , ", card.expiry_date) as cards , sale.sale_date, sale.currency_rate, sale.member_discount from tbl_sale sale inner join tbl_branches branches on sale.branches_id = branches.id
			inner join users u on sale.user_id = u.id
            inner join tbl_customer customer on sale.customer_id = customer.id
            inner join tbl_card_type card on sale.card_id = card.id`,
            [],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

};

