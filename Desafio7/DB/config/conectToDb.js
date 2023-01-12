const knex = require('knex');

const MariaDb = {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    database: 'products',
  }
}


const sqlite3Db = knex({
  client: 'sqlite3',
  connection: { filename: 'ecommerce.sqlite' },
  useNullAsDefault: true
})

module.exports = { MariaDb, sqlite3Db }
