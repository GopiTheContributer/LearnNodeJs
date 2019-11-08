"use strict";

const { constant } = require("../utils/constant");

const approveValidator = (req, res, next) => {
  if (req.body.ids == null) {
    return next(new Error(constant.requiredDataError));
  }
  return next();
};

const mpSeatValidator = (req, res, next) => {
  if (req.body.seats == null || req.body.stateid == null) {
    return next(new Error(constant.requiredDataError));
  }
  return next();
};

const registerCandidatesValidator = (req, res, next) => {
  if (
    req.body.year == null ||
    req.body.state_id == null ||
    req.body.party_id == null ||
    req.body.district_id == null ||
    req.body.candidate_id == null
  ) {
    return next(new Error(constant.requiredDataError));
  }
  return next();
};

module.exports.mpSeatValidator = mpSeatValidator;
module.exports.approveValidator = approveValidator;
module.exports.registerCandidatesValidator = registerCandidatesValidator;
