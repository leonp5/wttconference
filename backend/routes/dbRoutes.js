const express = require("express");
const dbRoutes = express.Router();

// Database Imports
const { addAttendee, getAttendees } = require("../lib/attendees");

dbRoutes.get("/attendees", async (request, response) => {
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
