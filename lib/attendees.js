const { getCollection } = require("./database");

function getAttendeeCollection() {
  return getCollection("attendees");
}

async function getAttendees() {
  const collection = await getAttendeeCollection();
  return await collection.find({}).toArray();
}

function addAttendee(attendee) {
  return getAttendeeCollection().insertOne(attendee);
}

module.exports = {
  addAttendee,
  getAttendees
};
