const { json } = require('express');
const knex = require('../database');

async function getProdutos(){
    try{
        let dados = await knex.select('*').from('produtos');
        return dados;
    } catch(erro){
        console.log(erro);
        throw {status: -1, mensagem: erro};
    }
    
}

module.exports = {
    getProdutos
}