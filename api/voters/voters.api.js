"use strict";

const { connection } = require("../../dal/connection");
const constant = require("../../utils/constant");
const { isUserRegistered } = require("../../dal/functionality.db");

const registerVoters = content => {
  if (!isUserRegistered(content.voter_id)) {
    console.log("user already registered with the application");
    return false;
  }
  const bcrypt = require("bcrypt");
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

module.exports.RegisterVoters = registerVoters;
