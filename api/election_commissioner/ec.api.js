"use strict";

const { connection } = require("../../dal/connection");

const approveVoters = content => {
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

const updateMpSeats = content => {
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

const getStatesandSeats = () => {
  let sqlQuery =
    "select name as Name, total_mp_seats as 'Total Seats' from states";
  let con = connection();
  return new Promise((resolve, reject) => {
    con.query(sqlQuery, (error, result) => {
      if (error) {
        return reject(error);
      }
      resolve(result);
    });
  });
};

const registerCandidates = content => {
  let sqlQuery = "insert into election_candidates set ?";
  const con = connection();
  con.query(sqlQuery, content, function(err, result) {
    if (err) {
      console.log(`query execution failed ${err.stack}`);
      return false;
    }
  });
  return true;
};

module.exports.updateMpSeats = updateMpSeats;
module.exports.approveVoters = approveVoters;
module.exports.getStatesandSeats = getStatesandSeats;
module.exports.registerCandidates = registerCandidates;
