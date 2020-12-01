const db = require('../config/database');
const Conta = require('../class/Conta');
const { response } = require('express');

exports.createCount = async (req, res) => {
  const { agencia, conta, nome, telefone, saldo } = req.body

  const contaCliente = new Conta(
    agencia,
    conta,
    nome,
    telefone,
    saldo
  );
  
  await db.query(`
    INSERT INTO conta (agencia, conta, nome, telefone, saldo) 
    VALUES (${contaCliente.agencia},'${contaCliente.conta}','${contaCliente.nome}','${contaCliente.telefone}', '${contaCliente.saldo}')
  `);
  return res.status(200).send({message: `Conta criada com sucesso! -> ${contaCliente}`});
}

exports.deposit = async (req, res) => {
  const { agencia, conta, saldo } = req.body;
  try {
    request = await db.query(`SELECT * FROM conta where agencia = '${agencia}' and conta = '${conta}'`);

    retorno = request.rows[0].saldo;
    saldo_final = retorno + saldo;

    await db.query(` UPDATE conta SET saldo = ${saldo_final}
    WHERE agencia = '${agencia}' and conta = '${conta}'`);
  } catch (error) {
    console.log(error)
    return res.status(400).send({ message: 'Deposito não efetuado.'})
  }

  return res.status(200).json({ message: `Deposito realizado com sucesso!' AGENCIA: ${agencia} / CONTA: ${conta} / VALOR DEPOSITADO: R$${saldo.toLocaleString()}`})
}

exports.saldo = async (req, res) => {
  const { nome, agencia, conta } = req.body;
  try {
    const request = await db.query(`SELECT saldo FROM conta where agencia = '${agencia}' and conta = '${conta}'`);
    return res.status(200).send({messege: `O saldo de ${nome} é R$: ${request.rows[0].saldo.toLocaleString()}`})
  } catch (error) {
    console.log(error)
    return res.status(400).send({messege: 'Dados invalidos.'})
  }
}

exports.saque = async (req, res) => {
  const { agencia, conta, saque } = req.body;
  try {
    request = await db.query(`SELECT * FROM conta where agencia = '${agencia}' and conta = '${conta}'`);

    retorno = request.rows[0].saldo;
    if(retorno <= 0) {
      return res.status(400).send('Você não tem limite para saque!')
    } 
    saldo_final = retorno - saque;
    await db.query(` UPDATE conta SET saldo = ${saldo_final}
    WHERE agencia = '${agencia}' and conta = '${conta}'`);
  } catch (error) {
    console.log(error)
    return res.status(400).send({ message: 'Deposito não efetuado.'})
  }
  return res.status(200).json({ message: `Saque realizado com sucesso!' AGENCIA: ${agencia} / CONTA: ${conta} / VALOR SACADO: R$${saque.toLocaleString()}`})
}