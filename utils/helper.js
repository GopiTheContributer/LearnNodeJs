"use strict";

const jwt = require("jsonwebtoken");
const { secret } = require("./constant");

const generateToken = username => {
  return jwt.sign({ username: username }, secret, { expiresIn: "24h" });
};

module.exports.generateToken = generateToken;
