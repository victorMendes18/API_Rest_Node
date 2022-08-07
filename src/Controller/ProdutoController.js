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

async function postProdutos(req, res){
    try {
        
        let {nome, valor} = req.body;
        
        if (!nome || nome == "" || nome.length == 0 || typeof nome != "string"){
            return res.status(400).json({status: -1, mensagem: "Campo nome inválido"});
        }

        if (!valor || valor <= 0 || typeof valor != "number"){
            return res.status(400).json({status: -1, mensagem: "Campo valor inválido"});
        }

        let resposta = await produto.postProdutos(nome, valor);

        return res.status(200).json(resposta); 
    } catch(erro){
        let resposta = erro;
        res.status(500).json(resposta)
    }
}

async function atualizarProduto(req, res){
    try{
        let idProduto = req.params.id;
    
        let validarIdProduto = await produto.validarProduto(idProduto);

        if (!validarIdProduto){
            return res.status(400).json({status: -1, mensagem: "Produto não cadastrado."});
        }

        let nome = req.body.nome;
        let valor = req.body.valor;

        let dados = {}

        if (nome == undefined && valor == undefined){
            return res.status(400).json({status: -1, mensagem: "Não foi feito nenhuma alteração."});
        }

        if (nome != undefined && (nome == "" || nome.length == 0 || typeof nome != "string")){
            return res.status(400).json({status: -1, mensagem: "Campo nome inválido."});
        } else {
            dados['nome'] = nome;
        }

        if (valor != undefined && (valor <= 0 || typeof valor != "number")){
            return res.status(400).json({status: -1, mensagem: "Campo valor inválido."});
        } else {
            dados['valor'] = valor;
        }

        let resposta = await produto.atualizarProduto(dados, idProduto);
        return res.status(200).json(resposta);
    } catch (erro){
        let resposta = erro;
        res.status(500).json(resposta);
    }
    

}

module.exports = {
    getProdutos,
    postProdutos,
    atualizarProduto
};