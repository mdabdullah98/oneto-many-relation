const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("nodeComplete", "root", "mdabdullah78615", {
  host: "localhost",
  dialect: "mysql",
});
module.exports = sequelize;
