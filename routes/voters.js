"use strict";

const express = require("express");
const route = express.Router();
const {
  RegisterVoters,
  loginVoters,
  castVotes
} = require("../api/voters/voters.api");
const {
  registerValidator,
  loginValidator,
  castVoteValidator
} = require("../middleware/voters.middleware");

route.post("/register", registerValidator, (req, res) => {
  if (!RegisterVoters(req.body)) {
    return res.send("failure");
  }
  return res.send("success");
});

route.get("/login", loginValidator, (req, res) => {
  if (!castVote(req.body)) {
    return res.send("Login failure");
  }
  return res.send("Login success");
});

route.post("/castvote", castVoteValidator, (req, res) => {
  if (!castVotes(req.body)) {
    return res.send("failure");
  }
  return res.send("success");
});

module.exports = route;
