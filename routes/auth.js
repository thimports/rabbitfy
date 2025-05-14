const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { email, senha } = req.body;
  if (email === 'mystore@rabbitfy.com' && senha === 'rabbit123') {
    return res.json({ token: 'fake-jwt-token', loja: 'mystore' });
  }
  res.status(401).json({ erro: 'Credenciais inválidas' });
});

module.exports = router;
