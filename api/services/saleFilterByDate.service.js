const pool = require('../../config/database');

module.exports = {
    saleFillterByDate: (start_date, end_date, callBack) => {
        pool.query(
            `SELECT 
                sale.id, sale.sale_date, customer.customer_name, invoice.invoice_no,
                CONCAT(currency.usd, "$", "=", currency.khr, "Riel") AS currency_rate,
                SUM(invoice.total_vat) AS vat,
                SUM(invoice.subtotal) AS subtotal,
                SUM(sale.member_discount) AS member_discount,
                CONCAT(SUM(invoice.total_vat) + SUM(invoice.subtotal)) AS total
            FROM tbl_invoice invoice
            INNER JOIN tbl_sale sale ON invoice.sale_id = sale.id
            INNER JOIN tbl_customer customer ON sale.customer_id = customer.id
            INNER JOIN tbl_currency currency ON sale.currency_id = currency.id
            WHERE DATE(sale.sale_date) BETWEEN ? AND ?
            GROUP BY sale.sale_date`,
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

