const pool = require('../../config/database');

module.exports = {
    /* 
        * create customer service
    */
    createCustomer: (data, callBack) => {
        pool.query(
            `insert into sdlc_pos.tbl_customer(customer_name, contact_number, status) values (?,?,?);`,
            [
                data.customer_name,
                data.contact_number,
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
    getCustomer: callBack => {
        pool.query(
            `select * from tbl_customer`,
            [

            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
};