const pool = require('../../config/database');

module.exports = {
    getInventoryReport: callBack => {
        pool.query(
            `select ic.id, ic.closing_date, pro.product_name, u.unit_name, ic.stock_in, ic.stock_out, ic.stock_adjustment, 
            ic.stock_return, ic.restock_quantity, ic.defective_quantity, ic.kit_transaction, ic.closing_stock
            from tbl_inventory_closing ic 
            inner join tbl_product pro on ic.product_id = pro.id
            inner join tbl_unit u on ic.unit_id = u.id`,
            [],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
}