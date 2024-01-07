// http-method-validation-middleware.js
const express = require('express');
const app = express();

app.use((req, res, next) => {
  const validMethods = ['GET', 'POST', 'PUT', 'DELETE'];
  if (!validMethods.includes(req.method)) {
    return res.status(400).send('Solicitud con método HTTP no válido');
  }

  next();
});
