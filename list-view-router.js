// list-view-router.js
const express = require('express');
const listViewRouter = express.Router();

// Ruta para listar tareas completas
listViewRouter.get('/completed', (req, res) => {
  // Lógica para obtener y enviar tareas completas
  res.json('Lista de tareas completas' );
});

// Ruta para listar tareas incompletas
listViewRouter.get('/incomplete', (req, res) => {
  // Lógica para obtener y enviar tareas incompletas
  res.json('Lista de tareas incompletas');
});

module.exports = listViewRouter;
