const { Router } = require('express');
const ContaController = require('../controllers/Conta.controller');

contaController = Router();

contaController.post('/criar', ContaController.createCount);
contaController.post('/depositar', ContaController.deposit);
contaController.post('/saldo', ContaController.saldo);
contaController.post('/saque', ContaController.saque);

module.exports = contaController;