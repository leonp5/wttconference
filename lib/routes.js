const express = require("express");
const router = express.Router();

const { addAttendee, getAttendees } = require("./attendees");
const sendMail = require("./sendMail");

router.get("/attendees", async (request, response) => {
  const attendees = await getAttendees();
  response.json(attendees);
});

router.post("/attendees", async (request, response) => {
  const attendee = request.body;
  await addAttendee(attendee);
  response.end();
});

router.post("/email", (request, response) => {
  const attendee = request.body;
  console.log("Daten: ", request.body);

  sendMail(attendee, function(error) {
    if (error) {
      response.status(500).json({ message: "Irgendwo ist nen Fehler" });
    } else {
      console.log("Mail gesendet!");
    }
  });
});

module.exports = router;
