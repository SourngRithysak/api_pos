const pool = require('../../config/database');

module.exports = {
    /*
        * get sale report
    */

    getSaleReport: callBack => {
        pool.query(
            `select 
            sale.id, sale.sale_date, customer.customer_name, invoice.invoice_no,
            concat(currency.usd, "$", "=", currency.khr, "Riel") as currency_rate, sum(invoice.total_vat) as vat, 
            sum(invoice.subtotal) as subtotal, sum(sale.member_discount) as member_discount,
            concat(sum(invoice.total_vat) + sum(invoice.subtotal)) as total
            from tbl_invoice invoice 
            inner join tbl_sale sale on invoice.sale_id = sale.id
            inner join tbl_customer customer on sale.customer_id = customer.id
            inner join tbl_currency currency on sale.currency_id = currency.id
            group by sale.sale_date`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

};

