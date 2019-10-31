"use strict";

const { connection } = require("../../dal/connection");
const constant = require("../../utils/constant");

const registerVoters = content => {
  const { mail, pass, voterid, name, address, phoneno } = content;
  const bcrypt = require("bcrypt");
  //   let values = [voterid, name, address, phoneno, mail, pass];

  content.pass = bcrypt.hashSync(pass, constant.saltLength);
  let sqlQuery =
    //"insert into register(voter_id, name, address, phone_no, email, password) values(?,?,?,?,?,?)";
    "insert into register set ?";

  let conn = connection();
  conn.query(sqlQuery, content, function(err, result) {
    if (err) {
      return false;
    }
  });
  console.log("in /register method out");
  return true;
};

module.exports.RegisterVoters = registerVoters;
