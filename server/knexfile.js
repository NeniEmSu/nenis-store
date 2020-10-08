// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "nenis_store",
      user: "postgres",
      password: "neni",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
