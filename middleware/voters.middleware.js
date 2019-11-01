"user strict";

let registerValidator = (req, res, next) => {
    console.log("in /register middleware method in");
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
  console.log("in /register middleware method out");
  return next();
};

module.exports.registerValidator = registerValidator;
