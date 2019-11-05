"use strict";

const { connection } = require("../../dal/connection");
const constant = require("../../utils/constant");
const sql = require("mysql");

let approveVoters = content => {
  let sqlQuery = `update register set status='A' where id in (${data})`;
  let conn = connection();
  conn.query(sqlQuery, function(err, result) {
    if (err) {
      console.log(`query execution fail: ${err.stack}`);
      return false;
    }
  });
  return true;
};

let updateMpSeats = content => {
  let sqlQuery = `update states set total_mp_seats=${content.seats} where id = (${content.stateid})`;
  let conn = connection();
  conn.query(sqlQuery, function(err, result) {
    if (err) {
      console.log(`query execution fail: ${err.stack}`);
      return false;
    }
  });
  return true;
};

let getStatesandSeats = () => {
  let sqlQuery =
    "select name as Name, total_mp_seats as 'Total Seats' from states";
  let con = openConnection();
  return new Promise((resolve, reject) => {
    con.query(sqlQuery, (error, result) => {
      if (error) {
        return reject(error);
      }
      resolve(result);
    });
  });
};

module.exports.updateMpSeats = updateMpSeats;
module.exports.approveVoters = approveVoters;
module.exports.getStatesandSeats = getStatesandSeats;
