const express = require("express");
const router = express.Router();

const { addAttendee, getAttendees } = require("./attendees");
const { sendRequest, sendConfirmation } = require("./sendMails");

router.get("/attendees", async (request, response) => {
  const attendees = await getAttendees();
  response.json(attendees);
});

router.post("/attendees", async (request, response) => {
  const attendee = request.body;
  await addAttendee(attendee);
  response.end();
});

router.post("/confirmation", (request, response) => {
  const attendee = request.body;
  console.log("Daten: ", request.body);

  sendConfirmation(attendee, function(error) {
    if (error) {
      response.status(500).json({ message: "Irgendwo ist nen Fehler" });
    } else {
      console.log("Mail gesendet!");
    }
  });
});

router.post("/request", (request, response) => {
  const message = request.body;
  console.log(request.body);

  sendRequest(message, function(error) {
    if (error) {
      response.status(500).json({ message: "Es gibt nen Fehler" });
    } else {
      console.log("Anfrage gesendet!");
    }
  });
});

module.exports = router;
