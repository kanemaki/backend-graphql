

module.exports = {
  client: 'mysql',
  connection: {
    database: 'projeto-final',
    user:     'root',
    password: '251366'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
