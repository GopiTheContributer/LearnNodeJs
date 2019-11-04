"use strict";

const { connection } = require("../../dal/connection");
const constant = require("../../utils/constant");
const { isUserRegistered } = require("../../dal/functionality.db");
const sql = require("mysql");

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

let login = (username, password) => {
  const bcrypt = require("bcrypt");
  content.password = bcrypt.compareSync(password, dsaf);
  let sqlQuery = `select name from register where email = ${sql.escape(
    username
  )} and password = ${sql.escape(password)}`;
  let conn = connection();
  conn.query(sqlQuery, function(err, result) {
    if (err) {
      console.log(`query execution fail: ${err.stack}`);
      return false;
    }
  });
};

module.exports.RegisterVoters = registerVoters;
module.exports.Login = login;
