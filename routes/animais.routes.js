const express = require('express');
const router = express.Router();

const animais = require('../data/animais.json'); // precisa existir também

// Listar todos os animais
router.get('/', (req, res) => {
  res.status(200).json(animais);
});

// Buscar animal por ID
router.get('/:id', (req, res) => {
  const animal = animais.find(a => a.id === req.params.id);
  if (!animal) {
    return res.status(404).json({ erro: 'Animal não encontrado.' });
  }
  res.status(200).json(animal);
});

// Criar novo animal
router.post('/', (req, res) => {
  const novo = req.body;

  if (!novo.nome || !novo.especie || !novo.abrigo_id) {
    return res.status(400).json({ erro: 'Campos obrigatórios ausentes.' });
  }

  novo.id = (animais.length + 1).toString();
  animais.push(novo);

  res.status(201).json(novo);
});

// Buscar animais por abrigo_id
router.get('/abrigo/:abrigo_id', (req, res) => {
  const resultado = animais.filter(a => a.abrigo_id === req.params.abrigo_id);
  if (resultado.length === 0) {
    return res.status(404).json({ erro: 'Nenhum animal encontrado para este abrigo.' });
  }
  res.status(200).json(resultado);
});

module.exports = router;
