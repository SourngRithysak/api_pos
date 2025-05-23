require('dotenv').config();
const express = require('express');
const app = express();
const customerRoutes = require('./api/routes/Customer.routes');
const cardRoutes = require('./api/routes/Card.routes');
const saleRoutes = require('./api/routes/Sale.routes');
const invoiceRoutes = require('./api/routes/Invoice.routes');
const purchaseReportRoutes = require('./api/routes/purchaseReport.routes');
const saleReportRoutes = require('./api/routes/saleReport.routes');
const inventoryReportRoutes = require('./api/routes/InventoryReport.routes');
const vatReportRoutes = require('./api/routes/VatReport.routes');
const endDayClosingReportRoutes = require('./api/routes/endDayClosingReport.routes');
const incomeReportRoutes = require('./api/routes/IncomeReport.routes');
const saleFillterByDateRoutes = require('./api/routes/saleFillterByDate.routes');
const purchaseFilterByDateRoutes = require('./api/routes/purchaseFilterByDate.routes');
const inventoryFilterByDateRoutes = require('./api/routes/inventoryFilterByDate.routes');
const incomeFilterByDateRoutes = require('./api/routes/incomeFilterByDate.routes');
const endDayClosingFilterByDateRoutes = require('./api/routes/endDayClosingFilterByDate.routes');
const vatFilterByDateRoutes = require('./api/routes/vatFilterByDate.routes');

app.use(express.json());

app.use('/api/customers', customerRoutes);
app.use('/api/cards', cardRoutes);
app.use('/api/sales', saleRoutes);
app.use('/api/invoices', invoiceRoutes);
app.use('/api/purchaseReports', purchaseReportRoutes);
app.use('/api/saleReports', saleReportRoutes);
app.use('/api/inventoryReports', inventoryReportRoutes);
app.use('/api/vatReports', vatReportRoutes);
app.use('/api/endDayClosingReports', endDayClosingReportRoutes);
app.use('/api/incomeReports', incomeReportRoutes);
app.use('/api/saleFillterByDates', saleFillterByDateRoutes);
app.use('/api/purchaseFilterByDates', purchaseFilterByDateRoutes);
app.use('/api/inventoryFilterByDates', inventoryFilterByDateRoutes);
app.use('/api/incomeFilterByDates', incomeFilterByDateRoutes);
app.use('/api/endDayClosingFilterByDates', endDayClosingFilterByDateRoutes);
app.use('/api/vatFilterByDates', vatFilterByDateRoutes);

app.listen(process.env.APP_PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.APP_PORT}`);
});