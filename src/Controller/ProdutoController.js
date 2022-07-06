const produto = require('../models/Produtos');

async function getProdutos(req, res){
    try{
        let resposta =   await produto.getProdutos();

        return res.status(200).json({status: 1, dados: resposta});
        
    } catch (erro){
        let resposta = erro;
        res.status(500).json(resposta);
    }
    
}

module.exports = {
    getProdutos
};