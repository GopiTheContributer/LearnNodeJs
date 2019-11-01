"use strict";

const sql = require("mysql");
const { connection } = require("./connection");

let isRegistered = voterid => {
  let sqlQuery = `select name from register where voter_id=${sql.escape(
    voterid
  )}`;
  let con = connection();
  con.query(sqlQuery, function(err, result) {
    if (err) {
      console.log("Something went wrong while executing query" + err.stack);
      return false;
    }
    if (result.length == 0) {
      return false;
    }
    return true;
  });
};

module.exports.isUserRegistered = isRegistered;
