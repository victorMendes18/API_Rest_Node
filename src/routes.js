const express = require('express');
const router = express.Router();
const produtoController = require('./Controller/ProdutoController');

router.get('/produtos', produtoController.getProdutos);
router.post('/produtos', produtoController.postProdutos);
router.patch('/produtos/:id', produtoController.atualizarProduto);

module.exports = router;