require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const {SERVER_PORT} = process.env;

const app = express();
const indexRoute = require('../routes/index');
const userRoute = require('../routes/user');
const productRoute = require('../routes/product');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', indexRoute);
app.use('/users', userRoute);
app.use('/products', productRoute);

app.listen(SERVER_PORT, function () {
  console.log(`Server on em: http://localhost:${SERVER_PORT}/`);
});

module.exports = app;
