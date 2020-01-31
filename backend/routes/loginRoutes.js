const express = require("express");
const loginRouter = express.Router();
const jwt = require("jsonwebtoken");

// Database Imports
const { addUser } = require("../lib/user");

const findUser = require("../login/findUser");
const hashPassword = require("../login/hashPassword");

loginRouter.post("/register", async (request, response) => {
  try {
    const user = request.body;

    if (!user.name || !user.email || !user.password)
      return response.status(400).json("Bitte trage Benutzername, Email und Passwort ein!");

    console.log(user);

    let foundUser = await findUser(user);
    if (foundUser)
      return response.status(400).json("Für diese Emailadresse existiert bereits ein User!");

    const hashedPW = await hashPassword(user.password);
    const newUser = { name: user.name, email: user.email, password: hashedPW };

    addUser(newUser);
    const savedUser = await findUser(newUser);

    const webtoken = {
      user: {
        id: savedUser._id
      }
    };

    jwt.sign(webtoken, process.env.JWT, { expiresIn: 600 }, (err, token) => {
      if (err) throw err;
      response.json({ token });
    });
  } catch (error) {
    console.error(error);
    response.end();
  }
});

loginRouter.post("/auth", async (request, response) => {
  try {
    const user = request.body;

    if (!user.email || !user.password)
      return response.status(400).json("Bitte trage Benutzername, Email und Passwort ein!");

    console.log(user);

    let foundUser = await findUser(user);
    if (!foundUser)
      return response.status(400).json(`Für ${user.email} gibt es noch keinen Benutzer!`);
  } catch (error) {
    console.error(error);
    response.end();
  }
});

module.exports = loginRouter;
