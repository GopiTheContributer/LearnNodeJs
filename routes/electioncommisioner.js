"use strict";

const express = require("express");
const route = express.Router();
const {
  approveValidator,
  mpSeatValidator,
  registerCandidatesValidator
} = require("../middleware/ec.middleware");
const {
  approveVoters,
  updateMpSeats,
  getStatesandSeats,
  registerCandidates
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
        return;
      }
      res.send("No result found");
    })
    .catch(error => {
      console.log(`Exception Occurred ${error.stack}`);
      res.send("Exception occurrec " + error.stack);
    });
});

route.post(
  "/registerelectioncandidates",
  registerCandidatesValidator,
  (req, res) => {
    if (!registerCandidates(req.body)) {
      return res.send("failure");
    }
    return res.send("success");
  }
);

module.exports = route;
