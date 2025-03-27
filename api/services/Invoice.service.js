const pool = require('../../config/database');

module.exports = {
    getInvoice: callBack => {
        pool.query(
            `select * from tbl_invoice`,
            [],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateInvoice: (data, callBack) => {
        pool.query(
            `update tbl_invoice set invoice_no = ?, sale_id = ?, exchange_id = ?, payment_method = ?, subtotal = ?, total_vat = ? where id = ?`,
            [
                data.invoice_no,
                data.sale_id,
                data.exchange_id,
                data.payment_method,
                data.subtotal,
                data.total_vat,
                data.id
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
}