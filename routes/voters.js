"use strict";

const express = require("express");
const route = express.Router();
const { RegisterVoters } = require("../api/voters/voters.api");

route.get("/register", (req, res) => {
  console.log("in register voter file");
  RegisterVoters();
  console.log("in register voter out file");
});

module.exports = route;
