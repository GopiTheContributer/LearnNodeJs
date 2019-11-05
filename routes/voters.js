"use strict";

const express = require("express");
const route = express.Router();
const { RegisterVoters, loginVoters } = require("../api/voters/voters.api");
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
  if (!loginVoters(req.body.username, req.body.password)) {
    return res.send("Login failure");
  }
  return res.send("Login success");
});

module.exports = route;
