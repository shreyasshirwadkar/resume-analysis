const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token)
    return res.status(401).json({ error: "Access Denied,No token provided" });
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid Token" });
  }
};

module.exports = verifyUser;
