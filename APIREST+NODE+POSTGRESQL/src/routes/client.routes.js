const { Router } = require('express');
const ClienteController = require('../controllers/Client.controller');

clienteController = Router();

clienteController.post('/cliente', ClienteController.createClient);
clienteController.get('/cliente/todos', ClienteController.listAllClients);

module.exports = clienteController;