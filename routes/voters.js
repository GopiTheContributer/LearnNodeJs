"use strict";

const express = require("express");
const route = express.Router();
const { RegisterVoters } = require("../api/voters/voters.api");
const {
  registerValidator,
  loginValidator
} = require("../middleware/voters.middleware");

route.post("/register", registerValidator, (req, res) => {
  if (!RegisterVoters(req.body)) {
    return res.send("failure");
  }
  return res.send("success");
});

route.get("/login", loginValidator, (req, res) => {
  
});

module.exports = route;
