var mysql = require("mysql");
var connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "rangers"
});
module.exports = connection;
