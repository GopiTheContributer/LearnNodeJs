"user strict";

const constant = require("../utils/constant");

const registerValidator = (req, res, next) => {
  if (
    req.body.email == null ||
    req.body.password == null ||
    req.body.voter_id == null ||
    req.body.name == null ||
    req.body.address == null ||
    req.body.phone_no == null
  ) {
    return next(new Error(constant.requiredDataError));
  }
  return next();
};

const loginValidator = (req, res, next) => {
  if (req.body.username == null || req.body.password == null) {
    return next(new Error(constant.requiredDataError));
  }
  return next();
};

const castVoteValidator = (req, res, next) => {
  if (
    req.body.year == null ||
    req.body.state_id ||
    req.body.user_id == null ||
    req.body.district_id == null ||
    req.body.candidate_id == null
  ) {
    return next(new Error(constant.requiredDataError));
  }
  return next();
};

module.exports.registerValidator = registerValidator;
module.exports.loginValidator = loginValidator;
module.exports.castVoteValidator = castVoteValidator;
