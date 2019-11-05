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

let getPassword = username => {
  let sqlQuery = `select password from register where email = ${sql.escape(
    username
  )}`;
  let con = connection();

  return new Promise((resolve, reject) => {
    con.query(sqlQuery, (err, result) => {
      if (err) {
        console.log("promise " + err.stack);
        return reject(err);
      }

      if (result.length == 0) {
        let error = new Error("user not registered with EMS");
        return reject(error);
      }
      resolve(result);
    });
  });
};

let isAlreadyVoteCasted = voterID => {
  let sqlQuery = `select user_id from votes where user_id = ${voterID}`;
  let con = connection();
  con.query(sqlQuery, (err, result) => {
    if (err) {
      return false;
    }
    if (result.length == 0) {
      return false;
    }
    return true;
  });
};

module.exports.isUserRegistered = isRegistered;
module.exports.getPassword = getPassword;
module.exports.isAlreadyVoteCasted = isAlreadyVoteCasted;
