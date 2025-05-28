# Juego de trivial en arquitectura REST API

Hemos implemetnado un juego de preguntas y respuestas tipo Trivial ®️ siguiendo una arquitectura REST API. El fichero _index.html_ consume una serie de endpoints del servidor que manda los datos en formato JSON. 

## Iteración 1: Implementar el endpoint `/api/question`

En esta primera iteración, tu objetivo es implementar el endpoint `/api/question` en el archivo `index.js`. Este endpoint debe devolver una pregunta aleatoria del trivial en formato JSON.

### Requisitos

- El endpoint debe estar en la ruta `/api/question` y responder a peticiones GET.
- Debe seleccionar aleatoriamente una pregunta del array `questions` (ya cargado desde `questions.json`).
- La respuesta debe ser un objeto JSON con la pregunta seleccionada, incluyendo sus opciones, respuesta y categoría.

### Pistas

- Utiliza `Math.random()` y `Math.floor()` para seleccionar un índice aleatorio.
- También puedes usar el módulo de terceros [lodash](https://www.npmjs.com/package/lodash) que permite obtener un elemento aleatorio de un array
- Recuerda usar `res.json()` para enviar la respuesta en formato JSON.

### Ejemplo de respuesta esperada

```json
{
  "question": "¿Cuál es la capital de Francia?",
  "options": ["París", "Londres", "Roma", "Berlín"],
  "answer": "París",
  "category": "Geografía"
}
```

> Implementa el endpoint en el lugar indicado en `index.js`. Cuando termines, podrás probarlo accediendo a `http://localhost:3001/api/question` desde tu navegador o usando una herramienta como [Thunderclient](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) o curl.



## Iteración 2: Implementar el endpoint `/api/categories`

En esta segunda iteración, tu objetivo es implementar el endpoint `/api/categories` en el archivo `index.js`. Este endpoint debe devolver la lista de categorías únicas de las preguntas del trivial.

### Requisitos

- El endpoint debe estar en la ruta `/api/categories` y responder a peticiones GET.
- Debe recorrer el array `questions` y extraer todas las categorías, devolviendo solo una vez cada una (sin duplicados).
- La respuesta debe ser un array JSON de strings, cada uno representando una categoría.

### Pistas

- Puedes usar `map` para obtener el campo `category` de cada pregunta.
- Usa `Set` para eliminar duplicados y luego conviértelo de nuevo a array con `Array.from()` o el spread operator `[...]`.
- Utiliza `res.json()` para enviar la respuesta.

### Ejemplo de respuesta esperada

```json
["Geografía", "Ciencia", "Literatura", "Historia", "Arte"]
```

> Implementa el endpoint en el lugar indicado en `index.js`. Cuando termines, podrás probarlo accediendo a `http://localhost:3001/api/categories` desde tu navegador o usando una herramienta como Postman o curl.

## Iteración 3: Filtrar preguntas por categoría usando query string

En esta tercera iteración, tu objetivo es modificar el endpoint `/api/question` para que acepte un parámetro opcional de query string llamado `category`. Si se proporciona una categoría, el endpoint debe devolver una pregunta aleatoria únicamente de esa categoría. Si no se proporciona, debe devolver una pregunta aleatoria de cualquier categoría.

### Requisitos

- El endpoint `/api/question` debe aceptar un parámetro de query string llamado `category` (por ejemplo: `/api/question?category=Geografía`).
- Si se pasa una categoría, solo debe seleccionar preguntas de esa categoría.
- Si no se pasa ninguna categoría, debe seleccionar una pregunta aleatoria de todas las preguntas.
- Si no hay preguntas para la categoría indicada, debe responder con un error 404 y un mensaje adecuado.

### Pistas

- Usa `req.query.category` para obtener el valor de la categoría desde la query string.
- Puedes usar `filter` para filtrar las preguntas por categoría.
- Recuerda comprobar si el array filtrado tiene elementos antes de seleccionar una pregunta aleatoria.

### Ejemplo de uso

- `/api/question` → Devuelve una pregunta aleatoria de cualquier categoría.
- `/api/question?category=Arte` → Devuelve una pregunta aleatoria de la categoría "Arte".

> Implementa la lógica en el endpoint `/api/question` en `index.js`. Puedes probarlo accediendo a URLs como `http://localhost:3001/api/question?category=Historia`.

## Iteración 4: Prueba la aplicación completa

Si has implementado correctamente los endpoints de las iteraciones anteriores, ahora la aplicación web debería ser completamente funcional.

### ¿Qué debes hacer en esta iteración?

1. **Arranca el servidor** ejecutando `node --watch index.js` o el comando correspondiente en tu terminal.
2. **Abre tu navegador** y accede a [http://localhost:3001](http://localhost:3001).
3. **Prueba la aplicación**:
   - Selecciona diferentes categorías en el selector.
   - Haz clic en "Siguiente Pregunta" para ver preguntas aleatorias.
   - Despliega el apartado "Mostrar respuesta" para comprobar la respuesta correcta.
   - Comprueba que el filtro por categoría funciona correctamente y que no aparecen preguntas de otras categorías.
   - Si seleccionas una categoría sin preguntas, la aplicación debe mostrar un mensaje adecuado.

### ¿Qué se espera?

- La aplicación debe mostrar preguntas y opciones correctamente.
- El selector de categorías debe estar relleno dinámicamente.
- El endpoint `/api/question` debe filtrar por categoría si se indica.
- El endpoint `/api/categories` debe devolver todas las categorías únicas.
- El apartado de respuesta debe funcionar como se espera.

> Si todo funciona correctamente, ¡enhorabuena! Has completado el ejercicio de desarrollo de una API y su integración con una aplicación web.




