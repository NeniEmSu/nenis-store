const connection = require("./connection");

module.exports = {
  getAll() {
    return connection("product");
  },

  getOne(id) {
    return connection("product").where("id", id).first();
  },

  async create(product) {
    const idArray = await connection("product").insert(product, "id");
    return idArray[0];
  },

  update(id) {
    return connection("product").where("id", id).update(product);
  },
};
