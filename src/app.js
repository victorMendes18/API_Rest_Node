const express = require('express');
const app = express();
const rotas = require('./routes');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(rotas);

module.exports = app;
