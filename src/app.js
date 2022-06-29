const express = require('express');
const app = express();
const knex = require('./database');

app.use((req, res, next) => {
    let dados = {
        nome: "amarelo",
        valor: 23.4
    }

    knex.select('*').from('produtos').then(data => {
        res.status(200).json(data);
    }).catch(err => {
        console.log(err);
    });
});

module.exports = app;
