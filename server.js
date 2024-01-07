// server.js
const express = require('express');
const app = express();
const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');
const port = 3000;

// Rutas principales
app.use('./list-view-router', listViewRouter); // Agrega el router de vista a /tasks
app.use('./list-edit-router', listEditRouter); // Agrega el router de edición a /tasks

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
