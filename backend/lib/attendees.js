const { getCollection } = require("./database");

function getAttendeeCollection() {
  return getCollection("attendees");
}

function getAttendees() {
  const collection = getAttendeeCollection();
  return collection.find({}, { projection: { _id: 0 } }).toArray();
}

function addAttendee(attendee) {
  return getAttendeeCollection().insertOne(attendee);
}

module.exports = {
  addAttendee,
  getAttendees
};
