const express = require('express');
const router = express.Router();

let configuracoes = {
  cor_fundo: '#ffffff',
  cor_botao: '#f90302',
  logo: '/logo.png',
  fonte: 'Inter'
};

router.get('/', (req, res) => {
  res.json(configuracoes);
});

router.put('/', (req, res) => {
  configuracoes = { ...configuracoes, ...req.body };
  res.json({ mensagem: 'Configurações atualizadas!', configuracoes });
});

module.exports = router;
