const knex = require("knex");

const connectionKnex  = knex({
    client:"sqlite3",
    connection:{
        filename:"my1.db"
    }
});

module.exports  = connectionKnex;