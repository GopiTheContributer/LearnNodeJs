"use strict";

const express = require("express");
const route = express.Router();
const {
  approveValidator,
  mpSeatValidator
} = require("../middleware/ec.middleware");
const {
  approveVoters,
  updateMpSeats,
  getStatesandSeats
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
  getStatesandSeats()
    .then(results => {
      if (results.length > 0) {
        res.send(results);
      }
      throw new Error("No Result Found");
    })
    .catch(error => {
      console.log(`Exception Occurred ${error.stack}`);
      res.send("Exception occurrec " + error.stack);
    });
});

module.exports = route;
