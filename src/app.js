const express = require('express');
const app = express();
const rotas = require('./routes');

app.use(rotas);

module.exports = app;
