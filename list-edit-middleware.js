// list-edit-middleware.js
const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  if (req.method === 'POST' && Object.keys(req.body).length === 0) {
    return res.status(400).send('Solicitud POST con cuerpo vacío');
  }

  if (req.method === 'POST' && (!req.body.isValid || !req.body.requiredAttribute)) {
    return res.status(400).send('Solicitud POST con información no válida o atributos faltantes');
  }

  if (req.method === 'PUT' && Object.keys(req.body).length === 0) {
    return res.status(400).send('Solicitud PUT con cuerpo vacío');
  }

  if (req.method === 'PUT' && (!req.body.isValid || !req.body.requiredAttribute)) {
    return res.status(400).send('Solicitud PUT con información no válida o atributos faltantes');
  }

  next();
});

module.exports = router;
