const express = require("express");
const dbRoutes = express.Router();

const verifyToken = require("../middleware/verifyToken");
const { addAttendee, getAttendees } = require("../lib/attendees");
const { getWorkshops, addWorkshops } = require("../lib/workshops");

dbRoutes.get("/attendees", verifyToken, async (request, response) => {
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

dbRoutes.get("/workshops", verifyToken, async (request, response) => {
  try {
    const workshops = await getWorkshops();

    response.json(workshops);
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
});

dbRoutes.post("/workshops", async (request, response) => {
  try {
    const workshop = request.body;
    await addWorkshops(workshop);
    response.end();
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
});

module.exports = dbRoutes;
