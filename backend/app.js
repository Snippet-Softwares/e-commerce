const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const app = express();

/* import routes */
const productsRoute = require('./routes/products');
const ordersRoute = require('./routes/orders');

app.use(express.json());

/* use routes */
app.use('/api/products', productsRoute);
app.use('/api/orders', ordersRoute);

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
    allowedHeaders: 'Content-Type, Authorization, Origin, X-requested-With, Accept'
}));
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
