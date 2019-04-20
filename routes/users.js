var express = require("express");
var router = express.Router();
var user = require("../models/User");

/* GET users. */
router.get("/", function(req, res, next) {
  user.getAllUsers(function(err, rows) {
    console.log(rows);
    if (err) {
      res.json(err);
    } else {
      console.log(rows);
      res.json(rows);
    }
  });
});

router.post("/verify", function(req, res, next) {
  console.log(req.body);
  user.verifyUser(req.body, function(err, result) {
    console.log(`result`);
    console.log(result);
    if (err) {
      res.json(err);
    } else {
      if (result.length === 0) {
        res.status(400).send({ error: "Invalid username and password" });
      } else {
        res.json(result[0]);
      }
    }
  });
});

router.post("/", function(req, res, next) {
  console.log("request body");
  console.log(req.body);
  user.createUser(req.body, function(err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
