const bcrypt = require("bcrypt");

async function validatePassword(foundUser, requestingUser) {
  const matchedPW = await bcrypt.compare(foundUser.password, requestingUser.password);
  return matchedPW;
}

module.exports = validatePassword;
