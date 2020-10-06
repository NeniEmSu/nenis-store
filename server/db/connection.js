const knex = require("knex");
const config = require("../knexfile");
const environment = process.env.NODE_ENV || "development";
const environmentConfig = config[environment];

export const connection = knex(environmentConfig);