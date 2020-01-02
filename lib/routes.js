const express = require("express");
const { addAttendee, getAttendees } = require("./attendees");

const router = express.Router();

router.get("/attendees", async (request, response) => {
  const attendees = await getAttendees();
  response.json(attendees);
});

router.post("/attendees", async (request, response) => {
  const attendee = request.body;
  await addAttendee(attendee);
  response.end();
});

module.exports = router;
