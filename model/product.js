const fs = require("fs");

const path = require("path");

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

  readFile(path) {}
  save() {
    const jsonPath = path.resolve(__dirname, "..", "data.json");
    fs.readFile(jsonPath, (err, data) => {
      let products = [];
      if (!err) {
        products = JSON.parse(data);
      }
      products.push(this);
      fs.writeFile(jsonPath, JSON.stringify(products), (err) => {
        if (err) throw Error(err);
      });
    });
  }

  cb() {}

  static fetchAll() {
    const jsonPath = path.resolve(__dirname, "..", "data.json");
    const data = fs.readFileSync(jsonPath, "utf-8", (err, data) => {
      if (err) return [];
      return data;
    });
    return data;
  }
};
