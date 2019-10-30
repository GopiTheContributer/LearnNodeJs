"use strict";

const { port_number } = require("./utils/constant");

const express = require("express");
const bodyParser = require("body-parser");
const port = port_number;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// voters route register
const voters_route = require('./routes/voters');
const ec_route = require("./routes/electioncommisioner");

app.use('/voter', voters_route);
app.use("/ec", ec_route);

app.listen(port, () => {
  console.log("server started");
});
