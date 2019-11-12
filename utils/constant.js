let port = 4000;
let connectionDetails = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "EMS"
};
const saltRounds = 10;

const requiredDataError = "required data not sent";

const secret = "thisismysecret";

module.exports.saltLength = saltRounds;
module.exports.port_number = port;
module.exports.dbConnection = connectionDetails;
module.exports.requiredDataError = requiredDataError;
module.exports.secret = secret;
