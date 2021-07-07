const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // Get the token from the header
  const token = req.header("x-auth-token");

  //   Check if the token exist
  if (!token) {
    //   unauthorized code 401
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    //   verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    //   unauthorized code
    res.status(401).json({ msg: "Token is not valid" });
  }
};
