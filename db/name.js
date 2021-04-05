const knex = require('knex');
function createName(name){
    return knex("name").insert(name)
}
function getAllName(){
    return knex("name").select("*");
}

module.exports = {
    createName,
    getAllName,
}