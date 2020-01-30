const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Database
const { addAttendee, getAttendees } = require("./attendees");

// Mail
const sendEmail = require("../sendEmails/sendMail");
const requestMail = require("../sendEmails/requestMail");
const registrationConfirmation = require("../sendEmails/registrationConfirmation");
const workshopConfirmation = require("../sendEmails/workshopConfirmation");
const workshopNotification = require("../sendEmails/workshopNotification");

// Login
const findUser = require("../login/findUser");
const { addUser } = require("../lib/user");
const hashPassword = require("../login/hashPassword");

router.get("/attendees", async (request, response) => {
  try {
    const attendees = await getAttendees();
    const filteredAttendees = attendees.map(attendee => {
      const newAttendee = { ...attendee };
      delete newAttendee._id;
      return newAttendee;
    });

    response.json(filteredAttendees);
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
});

router.post("/attendees", async (request, response) => {
  try {
    const attendee = request.body;
    await addAttendee(attendee);
    response.end();
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
});

router.post("/confirmation", async (request, response) => {
  try {
    const attendee = request.body;

    const Mail = registrationConfirmation(attendee);
    await sendEmail(Mail);
    response.end();
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
});

router.post("/request", async (request, response) => {
  try {
    const message = request.body;

    const Mail = requestMail(message);
    await sendEmail(Mail);
    response.end();
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
});

router.post("/workshop", async (request, response) => {
  try {
    const workshop = request.body;

    const confirmationMail = workshopConfirmation(workshop);
    const notificationMail = workshopNotification(workshop);
    await sendEmail(confirmationMail);
    await sendEmail(notificationMail);

    response.end();
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
});

router.post("/register", async (request, response) => {
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

    jwt.sign(webtoken, process.env.JWT, { expiresIn: 36000 }, (err, token) => {
      if (err) throw err;
      response.json({ token });
    });
  } catch (error) {
    console.error(error);
    response.end();
  }
});

// router.get("/register", async (request, response) => {
//   try {
//     const user = await getUser();
//     response.json(user);
//   } catch (error) {
//     console.error(error);
//     response.status(500).end();
//   }
// });

module.exports = router;
