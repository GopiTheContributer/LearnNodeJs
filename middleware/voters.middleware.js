"user strict";

let registerValidator = (req, res, next) => {
    console.log("in /register middleware method in");
  if (
    req.body.mail == null ||
    req.body.pass == null ||
    req.body.voterid == null ||
    req.body.name == null ||
    req.body.address == null ||
    req.body.phoneno == null
  ) {
    let err = new Error("required data not sent");
    return next(err);
  }
  console.log("in /register middleware method out");
  return next();
};

module.exports.registerValidator = registerValidator;
