const pg = require('pg');
const dotenv = require('dotenv');

dotenv.config()

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  try {
    console.log('Base de dados conectado com sucesso!')
  } catch (error) {
    console.log(`Erro ao conectar ${error}`)
  }
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};

// const client = new pg.Client({
//   user: 'posgres',
//   host: 'localhost',
//   database: 'posgres',
//   password: 'postgres',
//   port: 5432
// });