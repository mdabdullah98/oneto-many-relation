const Sequelize = require("sequelize");
const sequelize = require("../utils/database");
const Product = sequelize.define("products", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    unique: true,
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  imageUrl: Sequelize.STRING,
});
module.exports = Product;
