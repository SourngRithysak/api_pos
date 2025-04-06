const pool = require('../../config/database');

module.exports = {
    incomeFilterByDate: (start_date, end_date, callBack) => {
        pool.query(
            `SELECT
            sale.id, 
            sale.sale_date, 
            CONCAT(currency.usd, "$", " = ", currency.khr, " Riel") AS currency_rate, 
            CONCAT(SUM(invoice.total_vat), "$") AS vat, 
            CONCAT(SUM(invoice.subtotal) + SUM(invoice.total_vat), "$") AS total,
            CONCAT(SUM(CASE WHEN invoice.payment_method = 'cash' THEN invoice.subtotal + invoice.total_vat ELSE 0 END), "$") AS cash,
            CONCAT(SUM(CASE WHEN invoice.payment_method = 'card' THEN invoice.subtotal + invoice.total_vat ELSE 0 END), "$") AS card,
            CONCAT(SUM(CASE WHEN invoice.payment_method IS NULL THEN invoice.subtotal + invoice.total_vat ELSE 0 END), "$") AS walkin,
            CONCAT(SUM(CASE WHEN invoice.payment_method IS NOT NULL THEN invoice.subtotal + invoice.total_vat ELSE 0 END), "$") AS member_ship
            FROM tbl_sale sale
            INNER JOIN tbl_invoice invoice ON sale.id = invoice.sale_id
            INNER JOIN tbl_currency currency ON sale.currency_id = currency.id
            WHERE invoice.payment_method IN ('cash', 'card') AND sale.card_id IS NOT NULL and date(sale.sale_date) between ? and ?
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