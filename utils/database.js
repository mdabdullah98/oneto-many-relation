const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "nodeComplete",
  password: "mdabdullah78615",
});
module.exports = pool.promise();
