const knex = require('knex');

const configurations = require('../knexfile.js');

module.exports = knex(configurations.development);