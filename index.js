// módulo de terceros
const express = require('express');
const morgan = require('morgan');
const _ = require('lodash');

// módulos internos
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
  // Uso el método 'sample' de la biblioteca lodash para obtener un elemento al azar de este array
  const randomQuestion = _.sample(questions);

  // usamos el método json del objeto Response para devolver una respuesta en formato JSON
  res.status(200).json(randomQuestion);
});

// Endpoint para obtener categorías únicas
app.get('/api/categories', (req, res) => {

  // 1. Vamos a recorrer el array de questions y nos vamos a quedar solamente con las categorías. 
  let categories = questions.map(q => q.category);

  // Eliminar duplicados
  categories = _.uniq(categories);

  // 2. Devolver el array en formato JSON
  res.json(categories);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor Trivia escuchando en http://localhost:${PORT}`);
});
