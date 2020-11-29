const pg = require('pg');

const client = new pg.Client({
  user: 'posgres',
  host: 'localhost',
  database: 'posgres',
  password: 'postgres',
  port: 5432
});

module.exports = client