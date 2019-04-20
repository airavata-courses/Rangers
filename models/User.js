var db = require("../database/dbconnection");

var users = {
  createUser: function(Users, callback) {
    console.log(Users);
    return db.query(
      "Insert into users  (firstname, lastname, password, email, phone) values (?, ?, ?, ?, ?)",
      [
        Users.firstname,
        Users.lastname,
        Users.password,
        Users.email,
        Users.phone
      ],
      callback
    );
  },
  verifyUser: function(UsersDetails, callback) {
    return db.query(
      "Select * from users where email = ? and password = ?",
      [UsersDetails.email, UsersDetails.password],
      callback
    );
  },
  getAllUsers: function(callback) {
    return db.query("Select * from users;", callback);
  }
};

module.exports = users;
