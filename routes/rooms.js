var express = require("express");
var router = express.Router();
var room = require("../models/Rooms");

router.get("/:id?", function(req, res, next) {
  if (req.params.id) {
    room.getRoomById(req.params.id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    room.getAllRooms(function(err, rows) {
      console.log(rows);
      if (err) {
        res.json(err);
      } else {
        console.log(rows);
        res.json(rows);
      }
    });
  }
});

router.get("/getByLocation/:location", function(req, res, next) {
  room.getRoomsByLocation(req.params.location, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.post("/", function(req, res, next) {
  console.log("request body");
  console.log(req.body);
  room.createRoom(req.body, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body); //or return count for 1 &amp;amp;amp; 0
    }
  });
});

module.exports = router;
