const express = require("express");
const dbRoutes = express.Router();

// const auth = require("../middleware/auth");
const { addAttendee, getAttendees } = require("../lib/attendees");

dbRoutes.get("/attendees", async (request, response) => {
  try {
    const attendees = await getAttendees();

    response.json(attendees);
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
});

dbRoutes.post("/attendees", async (request, response) => {
  try {
    const attendee = request.body;
    await addAttendee(attendee);
    response.end();
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
});

module.exports = dbRoutes;
