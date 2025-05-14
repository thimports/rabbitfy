const express = require('express');
const router = express.Router();

let pedidos = [];

router.post('/', (req, res) => {
  const novoPedido = req.body;
  pedidos.push(novoPedido);
  res.status(201).json({ mensagem: 'Pedido recebido com sucesso!', pedido: novoPedido });
});

router.get('/', (req, res) => {
  res.json(pedidos);
});

module.exports = router;
