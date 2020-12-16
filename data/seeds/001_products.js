exports.seed = function (knex) {
  return knex("products").insert([
    { id: 1, name: "Joe DiMaggio" },
    { id: 2, name: "Ronald McDonald" },
    { id: 3, name: "Jerry Springer" },
  ]);
};
