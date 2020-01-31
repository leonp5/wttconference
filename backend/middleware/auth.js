const jwt = require("jsonwebtoken");

function auth(request, response, next) {
  const token = request.header("x-auth-token");

  // Check for token

  if (!token) response.status(401).json("Anmeldung erforderlich!");

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT);
    // Add user
    request.user = decoded;
    next();
  } catch (e) {
    response.status(400).json("Token is not valid");
  }
}

module.exports = auth;
