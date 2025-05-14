const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ nome: 'Produto Exemplo', preco: 89.90 }]);
});

module.exports = router;
