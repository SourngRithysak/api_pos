const pool = require('../../config/database');

module.exports = {
    purchaseFilterByDate: (start_date, end_date, callBack) => {
        pool.query(
            `select 
            p.id ,p.purchase_date, supplier.company_name, concat(currency.usd, "$", "=", currency.khr, "Riel") as currency_rate, 
            concat((sum(pd.quantity) * sum(pd.unit_price)) - pd.discount / 100) as subtotal,
            concat((sum(pd.quantity) * sum(pd.unit_price)) - pd.discount / 100) as total, p.remark 
            from tbl_purchase p 
            inner join users u on p.user_id = u.id
            inner join tbl_supplier supplier on p.supplier_id = supplier.id
            inner join tbl_sale sale on sale.user_id = u.id
            inner join tbl_purchase_detail pd on p.id = pd.purchase_id
            inner join tbl_currency currency on p.currency_id = currency.id
            where DATE(p.purchase_date) between ? and ?
            group by p.purchase_date`,
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