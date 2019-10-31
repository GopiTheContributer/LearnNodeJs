let port = 4000;
let connectionDetails = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "EMS"
};
const saltRounds = 10;

module.exports.saltLength = saltRounds;
module.exports.port_number = port;
module.exports.dbConnection = connectionDetails;
