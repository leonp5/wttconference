const jwt = require("jsonwebtoken");

function verfiyToken(request, response, next) {
  const token = request.header("x-auth-token");

  // Check for token

  if (!token) return response.status(401).json("Anmeldung erforderlich!");

  try {
    // Verify token
    const verified = jwt.verify(token, process.env.JWT);
    // Add user
    request.user = verified;
    next();
  } catch (e) {
    response.status(400).json("Token is not valid");
  }
}

module.exports = verfiyToken;
