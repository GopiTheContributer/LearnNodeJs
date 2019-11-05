"use strict";

const { connection } = require("../../dal/connection");
const constant = require("../../utils/constant");
const {
  isUserRegistered,
  getPassword,
  isAlreadyVoteCasted
} = require("../../dal/functionality.db");
const sql = require("mysql");
const bcrypt = require("bcrypt");

let registerVoters = content => {
  if (!isUserRegistered(content.voter_id)) {
    console.log("user already registered with the application");
    return false;
  }
  content.password = bcrypt.hashSync(content.password, constant.saltLength);
  let sqlQuery = "insert into register set ?";
  let conn = connection();
  conn.query(sqlQuery, content, function(err, result) {
    if (err) {
      console.log(`query execution fail: ${err.stack}`);
      return false;
    }
  });
  return true;
};

let loginVoters = (username, password) => {
  getPassword(username)
    .then(data => {
      if (bcrypt.compareSync(password, data[0].password)) {
        console.log("password is correct");
        return true;
      }
      console.log("incorrect password");
      return false;
    })
    .catch(error => {
      console.log(`promise rejectd error -- ${error.stack}`);
      return false;
    });
};

let castVotes = content => {
  let sqlQuery = "insert into votes set ?";
  if (!isAlreadyVoteCasted(content.voter_id)) {
    console.log("user already casted voted");
    return false;
  }
  let conn = connection();
  conn.query(sqlQuery, content, function(err, result) {
    if (err) {
      console.log(`query execution fail: ${err.stack}`);
      return false;
    }
  });
  return true;
};

module.exports.RegisterVoters = registerVoters;
module.exports.loginVoters = loginVoters;
module.exports.castVotes = castVotes;
