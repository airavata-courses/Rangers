var mysql = require("mysql");
var connection = mysql.createPool({
    host: "149.165.171.144",
    user: "root",
    password: "password",
    database: "rangers",
    insecureAuth : true
});
module.exports = connection;
