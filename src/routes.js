const express = require('express');
const router = express.Router();
const produtoController = require('./Controller/ProdutoController');

router.get('/produtos', produtoController.getProdutos);

module.exports = router;