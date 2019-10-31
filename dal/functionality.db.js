"use strict";

const sql = require("mysql");
const { getConnection } = require("./connection");

let isRegistered = voterid => {
  console.log("in /register db validation method in");
  let sqlQuery = `select name from register where voter_id=${sql.escape(
    voterid
  )}`;

  let connection = getConnection();

  connection.query(sqlQuery, function(err, result) {
    if (err) {
      let error = new Error(
        "Something went wrong while executing query" + err.stack
      );
      return error;
    }

    if (result.length == 0) {
      return false;
    }
    console.log("in /register db validation method out");
    return true;
  });
};

module.exports.isRegisteredAlready = isRegisteredAlready;
