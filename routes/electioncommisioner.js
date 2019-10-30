"use strict";

const express = require("express");
const route = express.Router();

route.get("/approve", (req, res) => {
  res.send("testing");
});

module.exports = route;
