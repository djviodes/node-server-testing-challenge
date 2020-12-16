exports.up = function (knex) {
  return knex.schema.createTable("products", (table) => {
    table.increments();
    table.string("name", 128).notNullable;
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("products");
};
