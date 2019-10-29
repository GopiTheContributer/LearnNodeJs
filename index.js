"use strict";

const { port_number } = require("./utils/constant");

const express = require("express");
const port = port_number;
const app = express();

app
  .route("/login")
  .get((req, res) => {
    res.send("in the login form");
  })
  .post((req, res) => {
    res.send("processing the login form");
  });

app.listen(port, () => {
  console.log("server started");
});
