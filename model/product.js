const db = require("../utils/database");

module.exports = class Product {
  constructor(title, price, description, thumbnail) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.thumbnail = thumbnail;
  }

  save() {
    return db.execute(
      "INSERT INTO products (title,price,decription,imageUrl) VALUES(?,?,?,?)",
      [this.title, this.price, this.description, this.thumbnail]
    );
  }

  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }
  static deleteById(id) {
    return db.execute(`DELETE FROM products WHERE products.id = ?`, [id]);
  }
  static findById() {}
  static getsingleProduct(id) {
    return db.execute(`SELECT * FROM products WHERE products.id = ?`, [id]);
  }
};
