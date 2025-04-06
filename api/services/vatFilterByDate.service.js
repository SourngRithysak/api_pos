const pool = require('../../config/database');

module.exports = {
    vatFilterByDate: (start_date, end_date, callBack) => {
        pool.query(
            `select 
            sale.id, sale.sale_date, concat(c.usd, "$", " = ", c.khr, "Riel") as currency_rate,
            concat(sum(invoice.total_vat), "$") as total_vat,
            concat(sum(case when invoice.payment_method = "cash" then invoice.total_vat else 0 end), "$") as cash, 
            concat(sum(case when invoice.payment_method = "card" then invoice.total_vat else 0 end), "$") as card
            from tbl_sale sale
            inner join tbl_currency c on sale.currency_id = c.id
            inner join tbl_invoice invoice on sale.id = invoice.sale_id
            where invoice.payment_method in ('cash', 'card') and date(sale.sale_date) between ? and ?
            group by sale.sale_date`,
            [start_date, end_date],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
}