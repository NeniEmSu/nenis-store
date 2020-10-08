const config = require("../knexfile");
const environment =
  process.env.NODE_ENV !== "production" ? "development" : "production";
const environmentConfig = config[environment];
const knex = require("knex");

const connection = knex(environmentConfig);

module.exports = connection;
