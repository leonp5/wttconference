const express = require("express");
const router = express.Router();

const { addAttendee, getAttendees } = require("./attendees");
const {
  sendRequest,
  sendConfirmation,
  sendWorkshopToOrgaTeam,
  sendWorkshopToSupplier
} = require("./sendMails");

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

    await sendConfirmation(attendee);
    response.end();
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
});

router.post("/request", async (request, response) => {
  try {
    const message = request.body;
    console.log(request.body);
    await sendRequest(message);
    response.end();
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
});

router.post("/workshop", async (request, response) => {
  try {
    const workshop = request.body;

    await sendWorkshopToSupplier(workshop);
    await sendWorkshopToOrgaTeam(workshop);

    response.end();
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
});

module.exports = router;
