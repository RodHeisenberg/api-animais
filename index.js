const express = require('express');
const app = express();

// Middleware para aceitar requisições com corpo em JSON
app.use(express.json());

// Importa os arquivos de rotas
const abrigosRoutes = require('./routes/abrigos.routes');
const animaisRoutes = require('./routes/animais.routes');
const adotantesRoutes = require('./routes/adotantes.routes');


// Define os prefixos das rotas
app.use('/api/abrigos', abrigosRoutes);
app.use('/api/animais', animaisRoutes);

// Rota raiz (GET /)
app.get('/', (req, res) => {
  res.send('🚀 API de Adoção de Animais de Rua funcionando!');
});

// Inicia o servidor na porta 3000
const PORT = 3000;
app.use('/api/adotantes', adotantesRoutes);
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
