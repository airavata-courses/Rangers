var mysql = require("mysql");
var connection = mysql.createPool({
    host: "db",
    user: "root",
    password: "password",
    database: "rangers",
    insecureAuth : true
});
module.exports = connection;
