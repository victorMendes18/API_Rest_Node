var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: "localhost",
        user: "root",
        password: "",
        port: 3306,
        database: "api_rest_node"
    }
});

module.exports = knex;