//  import du module PG pour communiquer avec la database
const {Client} = require('pg');

const client = new Client();

client.connect();

module.exports = client;