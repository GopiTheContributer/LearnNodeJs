"use strict";

let approveValidator = (req, res, next) => {
  if (req.body.ids == null) {
    let err = new Error("required data not sent");
    return next(err);
  }
  return next();
};

let mpSeatValidator = (req, res, next) => {
  if (req.body.seats == null || req.body.stateid == null) {
    let err = new Error("required data not sent");
    return next(err);
  }
  return next();
};

module.exports.mpSeatValidator = mpSeatValidator;
module.exports.approveValidator = approveValidator;
