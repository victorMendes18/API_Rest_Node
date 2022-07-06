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

async function postProdutos(nome, valor){
    try{
        let resposta = await knex('produtos').insert({nome: nome, valor: valor})
                         .then((res) => {
                            return {status: 1, mensagem: "Produto cadastrado com sucesso"};
                         })
                         .catch((erro) => {
                            console.log(erro);
                            throw erro;
                         });

        return resposta;
    } catch (erro){
        console.log(erro);
        throw {status: -1, mensagem: erro};
    }
    
}

module.exports = {
    getProdutos,
    postProdutos
}