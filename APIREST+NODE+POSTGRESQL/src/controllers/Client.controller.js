const db = require('../config/database');
const Cliente = require('../class/Cliente');

const moment = require('moment');

const dateNow = moment().format('YYYY-MM-DD');

exports.createClient = async (req, res) => {
  const cliente = new Cliente(
    req.body.id,
    req.body.nome,
    req.body.endereco,
    req.body.email,
    req.body.dataCadastro
  );

  const response = await db.query(`
    INSERT INTO cliente (userId, nome, endereco, email, dataCadastro) 
    VALUES (${cliente.id},'${cliente.nome}','${cliente.endereco}','${cliente.email}','${dateNow}')
  `);

  return res.status(200).send({message: `Inserido com sucesso! -> ${cliente}`});
}

exports.listAllClients = async (req, res) => {
  const response = await db.query(`SELECT * FROM cliente`);

  return res.status(200).json(response.rows)
}