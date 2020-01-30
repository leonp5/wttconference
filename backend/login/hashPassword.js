const bcrypt = require("bcrypt");

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPW = await bcrypt.hash(password, salt);
  return hashedPW;
}

module.exports = hashPassword;
