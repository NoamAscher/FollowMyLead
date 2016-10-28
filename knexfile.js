// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'midterm',
      user:     'development',
      password: 'development',
      host: 'localhost',
      port: '5432'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'midterm',
      user:     'vagrant',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

};
