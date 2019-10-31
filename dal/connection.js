const sql = require("mysql");
const { dbConnection  } = require('../utils/constant');

let connection = null;

let getConnection = function() {
  if (connection == null) {
    connection = sql.createConnection(dbConnection);
  }
  return connection;
};

module.exports.connection = getConnection;
