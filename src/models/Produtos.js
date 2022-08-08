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

async function validarProduto(idProduto){
    try{
        let resposta = await knex.select('id')
                        .from('produtos')
                        .where('id', idProduto)
                        .catch((erro) => {
                            console.log(erro);
                            throw erro;
                        });

        if (!(resposta.length == 0)) {
            return true;
        }else{
            return false;
        }
        
    } catch (erro) {
        console.log(erro)
        throw {status: -1, mensagem: erro}
    }
    
}

async function atualizarProduto(dados, idProduto){
    try{
        let resposta = await knex('produtos')
                        .update(dados)
                        .where('id', idProduto)
                        .then((res) => {
                            return {status: 1, mensagem: "Produto atualizado com sucesso"};
                        })
                        .catch((erro) => {
                            console.log(erro);
                            throw erro;
                        });

        return resposta;
    } catch (erro) {
        console.log(erro);
        throw ({status: -1, mensagem: erro})
    }
}

async function deletarProduto(id){
    try{
        let resposta = await knex('produtos')
                        .del()
                        .where('id', id)
                        .then((res) => {
                            return {status: 1, mensagem: "Produto deletado com sucesso."};
                        })
                        .catch((erro => {
                            console.log(erro);
                            throw erro;
                        }));
        
        return resposta;
    } catch (erro) {
        console.log(erro);
        throw ({status: -1, mensagem: erro})
    }
}

module.exports = {
    getProdutos,
    postProdutos,
    validarProduto,
    atualizarProduto,
    deletarProduto
}