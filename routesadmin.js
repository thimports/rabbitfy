const express = require('express');
const router = express.Router();

const lojas = [
  { id: 1, nome: 'mystore', email: 'mystore@rabbitfy.com', slug: 'mystore' }
];

router.get('/lojas', (req, res) => {
  res.json(lojas);
});

module.exports = router;