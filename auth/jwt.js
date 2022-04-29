const jwt = require("jsonwebtoken");

const secret =
  process.env.JWT_SECRET || "e9rp^&^*&@9sejg)DSUA)jpfds8394jdsfn,m";

// when somebody logs in => create a token for him
function toJWT(data) {
  // create a token for us
  return jwt.sign(data, secret, { expiresIn: "2h" });
}

// Check if tokens are valid
function toData(token) {
  // decode/verify an existing token
  return jwt.verify(token, secret);
}

module.exports = { toJWT, toData };
