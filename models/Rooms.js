var db = require("../database/dbconnection");

var rooms = {
  getAllRooms: function(callback) {
    console.log("Get all rooms");
    return db.query("Select * from rooms;", callback);
  },
  getRoomById: function(id, callback) {
    return db.query("Select * from rooms where Id=?;", [id], callback);
  },
  getRoomsByLocation: function(location, callback) {
    return db.query(
      "Select * from rooms where available = 1 and location = ?;",
      [location],
      callback
    );
  },
  updateRoom: function(id, callback) {
    return db.query(
      "Update rooms set available = FALSE where id = ?",
      [id],
      callback
    );
  },
  createRoom: function(Rooms, callback) {
    console.log(Rooms);
    return db.query(
      "Insert into rooms  (location, owneremail, guests, available, price, description, wifi, microwave, safeCloset) values (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        Rooms.location,
        Rooms.owneremail,
        Rooms.guests,
        Rooms.available,
        Rooms.price,
        Rooms.description,
        Rooms.wifi,
        Rooms.microwave,
        Rooms.safeCloset
      ],
      callback
    );
  }
};



module.exports = rooms;
