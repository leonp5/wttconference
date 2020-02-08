const express = require("express");
const mailRoutes = express.Router();

const { sendInfoEmail, sendWorkshopEmail } = require("../sendEmails/sendMail");
const requestMail = require("../sendEmails/requestMail");
const registrationConfirmation = require("../sendEmails/registrationConfirmation");
const registrationNotification = require("../sendEmails/registrationNotification");
const workshopConfirmation = require("../sendEmails/workshopConfirmation");
const workshopNotification = require("../sendEmails/workshopNotification");

mailRoutes.post("/confirmation", async (request, response) => {
  try {
    const attendee = request.body;

    const confirmationMail = registrationConfirmation(attendee);
    const notificationMail = registrationNotification(attendee);
    await sendInfoEmail(confirmationMail);
    await sendInfoEmail(notificationMail);
    response.end();
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
});

mailRoutes.post("/request", async (request, response) => {
  try {
    const message = request.body;

    const Mail = requestMail(message);
    await sendInfoEmail(Mail);
    response.end();
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
});

mailRoutes.post("/workshop", async (request, response) => {
  try {
    const workshop = request.body;

    const confirmationMail = workshopConfirmation(workshop);
    const notificationMail = workshopNotification(workshop);
    await sendWorkshopEmail(confirmationMail);
    await sendWorkshopEmail(notificationMail);

    response.end();
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
});

module.exports = mailRoutes;
