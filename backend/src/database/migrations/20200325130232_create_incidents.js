
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');  // refenciar a tabela estrangeira dentro da tabela atual 

    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
