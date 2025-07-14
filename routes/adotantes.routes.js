const express = require('express');
const router = express.Router();

const adotantes = require('../data/adotantes.json');

// Listar todos os adotantes
router.get('/', (req, res) => {
  res.status(200).json(adotantes);
});

// Buscar adotante por ID
router.get('/:id', (req, res) => {
  const adotante = adotantes.find(a => a.id === req.params.id);
  if (!adotante) {
    return res.status(404).json({ erro: 'Adotante não encontrado.' });
  }
  res.status(200).json(adotante);
});

// Cadastrar novo adotante
router.post('/', (req, res) => {
  const novo = req.body;

  if (!novo.nome || !novo.email || !novo.telefone || !novo.endereco) {
    return res.status(400).json({ erro: 'Campos obrigatórios ausentes.' });
  }

  novo.id = (adotantes.length + 1).toString();
  adotantes.push(novo);

  res.status(201).json(novo);
});

// Atualizar adotante
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const atualizacao = req.body;

  const index = adotantes.findIndex(a => a.id === id);
  if (index === -1) {
    return res.status(404).json({ erro: 'Adotante não encontrado.' });
  }

  adotantes[index] = { ...adotantes[index], ...atualizacao, id };

  res.status(200).json(adotantes[index]);
});

// Excluir adotante
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const index = adotantes.findIndex(a => a.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: 'Adotante não encontrado.' });
  }

  adotantes.splice(index, 1);

  res.status(204).send();
});

module.exports = router;
