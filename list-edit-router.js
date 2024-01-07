// list-edit-router.js
const express = require('express');
const listEditRouter = express.Router();

// Ruta para crear una tarea (POST)
listEditRouter.post('/create', (req, res) => {
  // Lógica para crear una nueva tarea
  res.json('Respuesta de creación exitosa');
});

// Ruta para eliminar una tarea (DELETE)
listEditRouter.delete('/delete/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  // Lógica para eliminar la tarea con el ID proporcionado
  res.json('Respuesta de eliminación exitosa');
});

// Ruta para actualizar una tarea (UPDATE)
listEditRouter.put('/update/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  // Lógica para actualizar la tarea con el ID proporcionado
  res.json('Respuesta de actualización exitosa');
});

module.exports = listEditRouter;
