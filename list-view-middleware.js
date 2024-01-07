// list-view-middleware.js
const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  if (!req.params.correctParam) {
    return res.status(400).send('Parámetros incorrectos en la solicitud');
  }

  next();
});

module.exports = router;
