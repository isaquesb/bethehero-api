
exports.up = function(knex) {
    return knex.schema.createTable('bth_incident', function (table) {
        table.increments('id');
        table.string('ong_id').notNullable();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        table.timestamps(true, true);
        table.foreign('ong_id').references('id').inTable('bth_ong')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('bth_incident')
};
