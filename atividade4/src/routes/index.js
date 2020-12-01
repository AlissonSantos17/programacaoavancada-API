const express = require('express');

const contaRouter = require('./conta.routes');

const routes = express.Router();

routes.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja bem-vindo(a) a API Node.js + PostgreSQL!',
    version: '1.0.0',
  });
});

routes.use('/api/v1', contaRouter);

module.exports = routes;