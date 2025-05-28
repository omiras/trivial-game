// 1. Use require instead of import
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3001;


// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// Cargar preguntas desde JSON. En esta variable dispones siempre de todasl as preguntas de la "base de datos"
const questions = JSON.parse(fs.readFileSync('./questions.json', 'utf-8'));

// Endpoint para obtener una pregunta aleatoria (con filtro por categoría)
app.get('/api/question', (req, res) => {
  res.send('Falta implementar el endpoint /api/question');
});

// Endpoint para obtener categorías únicas
app.get('/api/categories', (req, res) => {
  res.send('Falta implementar el endpoint /api/categories');
});



// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor Trivia escuchando en http://localhost:${PORT}`);
});
