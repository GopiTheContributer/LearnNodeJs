"use strict";

const express = require("express");
const route = express.Router();
const { RegisterVoters } = require("../api/voters/voters.api");
const { registerValidator } = require("../middleware/voters.middleware");

route.post("/register", registerValidator, (req, res) => {
  console.log("in /register method in");
  if (RegisterVoters(req.body)) {
    return res.send("failure");
  }

  console.log("in /register method out");
  return res.send("Success");

});

module.exports = route;
