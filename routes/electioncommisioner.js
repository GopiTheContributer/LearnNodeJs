"use strict";

const express = require("express");
const route = express.Router();
const {
  approveValidator,
  mpSeatValidator
} = require("../middleware/ec.middleware");
const {
  approveVoters,
  updateMpSeats
} = require("../api/election_commissioner/ec.api");

route.put("/approve", approveValidator, (req, res) => {
  if (!approveVoters(req.body)) {
    return res.send("failure");
  }
  return res.send("success");
});

route.put("/changempseats", mpSeatValidator, (req, res) => {
  if (!updateMpSeats(req.body)) {
    return res.send("failure");
  }
  return res.send("success");
});

route.get("/getstatesandseats", (req, res) => {
  let sqlQuery =
    "select name as Name, total_mp_seats as 'Total Seats' from states";
  let con = openConnection();
  con.query(sqlQuery, (error, result) => {
    if (error) {
      return res.send({
        error: "Query execution unsuccessfull " + error.stack
      });
    }
    res.send(result);
  });
});

module.exports = route;
