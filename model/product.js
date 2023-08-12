const db = require("../utils/database");

module.exports = class Product {
  constructor(
    title,
    brand,
    model,
    price,
    catagory,
    stock,
    description,
    discountPercentage,
    thumbnail
  ) {
    this.title = title;
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.catagory = catagory;
    this.stock = stock;
    this.description = description;
    this.discountPercentage = discountPercentage;
    this.thumbnail = thumbnail;
  }

  save() {}

  static deleteById() {}

  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }
  static findById() {}
};
