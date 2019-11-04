"user strict";

let registerValidator = (req, res, next) => {
  if (
    req.body.email == null ||
    req.body.password == null ||
    req.body.voter_id == null ||
    req.body.name == null ||
    req.body.address == null ||
    req.body.phone_no == null
  ) {
    let err = new Error("required data not sent");
    return next(err);
  }
  return next();
};

let loginValidator = (req, res, next) => {
  if (req.body.username == null || req.body.password == null) {
    let err = new Error("required data not sent");
    return next(err);
  }
  return next();
};

module.exports.registerValidator = registerValidator;
module.exports.loginValidator = loginValidator;
