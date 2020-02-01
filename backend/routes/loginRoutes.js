const express = require("express");
const loginRouter = express.Router();
const jwt = require("jsonwebtoken");

const { addUser } = require("../lib/user");

const verifyToken = require("../middleware/verifyToken");

const { findUserById, findUser } = require("../login/findUser");
const hashPassword = require("../login/hashPassword");
const validatePassword = require("../login/validatePassword");

loginRouter.post("/register", async (request, response) => {
  try {
    const user = request.body;

    if (!user.name || !user.email || !user.password)
      return response.status(400).json("Bitte trage Benutzername, Email und Passwort ein!");

    const foundUser = await findUser(user);
    if (foundUser)
      return response.status(400).json("Für diese Emailadresse existiert bereits ein User!");

    const hashedPW = await hashPassword(user.password);
    const newUser = { name: user.name, email: user.email, password: hashedPW };

    addUser(newUser);
    const savedUser = await findUser(newUser);

    const payload = {
      user: {
        id: savedUser._id
      }
    };

    jwt.sign(payload, process.env.JWT, { expiresIn: 600 }, (err, token) => {
      if (err) throw err;
      response.json({ token });
    });
  } catch (error) {
    console.error(error);
    response.end();
  }
});

loginRouter.post("/auth", async (request, response) => {
  const user = request.body;
  try {
    if (!user.email || !user.password)
      return response.status(401).json("Bitte trage Email und Passwort ein!");

    console.log(user);

    const foundUser = await findUser(user);
    if (!foundUser)
      return response.status(400).json(`Für ${user.email} gibt es noch keinen Benutzer!`);

    const matchedPW = await validatePassword(user, foundUser);
    if (!matchedPW)
      response.status(400).json("Das Passwort ist nicht korrekt. Probier es noch einmal!");

    const payload = {
      user: {
        id: foundUser._id
      }
    };

    jwt.sign(payload, process.env.JWT, { expiresIn: 600 }, (err, token) => {
      if (err) throw err;
      response.json({ token });
    });
  } catch (error) {
    console.error(error);
    response.end();
  }
});

loginRouter.get("/user", verifyToken, async (request, response) => {
  try {
    const foundUser = await findUserById(request.user.user.id);
    response.json(foundUser);
  } catch (error) {
    console.error(error);
    response.end();
  }
});

module.exports = loginRouter;
