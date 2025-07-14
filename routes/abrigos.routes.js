const express = require('express');
const router = express.Router();

const abrigos = require('../data/abrigos.json'); // simulação de banco

// GET /api/abrigos/:id
router.get('/:id', (req, res) => {
  const abrigo = abrigos.find(a => a.id === req.params.id);

  if (!abrigo) {
    return res.status(404).json({ erro: "Abrigo não encontrado." });
  }

  res.status(200).json(abrigo);
});

// PUT /api/abrigos/:id
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const atualizacao = req.body;

  const index = abrigos.findIndex(a => a.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Abrigo não encontrado." });
  }

  // Atualiza apenas os campos enviados
  abrigos[index] = { ...abrigos[index], ...atualizacao, id }; // preserva o id original

  res.status(200).json(abrigos[index]);
});


// POST /api/abrigos
router.post('/', (req, res) => {
  const novo = req.body;

  if (!novo.nome || !novo.endereco || !novo.email) {
    return res.status(400).json({ erro: "Campos obrigatórios faltando." });
  }

  novo.id = (abrigos.length + 1).toString();
  abrigos.push(novo);

  res.status(201).json(novo);
});

module.exports = router;
