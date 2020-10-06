exports.up = function (knex, Promise) {
  return knex.schema.createTable('product', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.string('image');
    table.string('description');
    table.decimal('price').notNullable();
    table.integer('quantity').unsigned().notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('product');
};