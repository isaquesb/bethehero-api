
exports.up = function(knex) {
    return knex.schema.createTable('bth_ong', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('cellphone', 15).notNullable();
        table.string('city', 50).notNullable();
        table.string('uf', 2).notNullable();
        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('bth_ong')
};
