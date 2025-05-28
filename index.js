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

// Cargar preguntas desde JSON
let questions = JSON.parse(fs.readFileSync('./questions.json', 'utf-8'));

// Endpoint para obtener categorías únicas
app.get('/api/categories', (req, res) => {
  const categories = [...new Set(questions.map(q => q.category))];
  res.json(categories);
});

// Endpoint para obtener una pregunta aleatoria (con filtro por categoría)
app.get('/api/question', (req, res) => {
  const { category } = req.query;
  let filtered = questions;
  if (category) {
    filtered = questions.filter(q => q.category === category);
  }
  if (filtered.length === 0) {
    return res.status(404).json({ error: 'No hay preguntas para esta categoría' });
  }
  const randomIndex = Math.floor(Math.random() * filtered.length);
  res.json(filtered[randomIndex]);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor Trivia escuchando en http://localhost:${PORT}`);
});
