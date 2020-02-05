const { getCollection } = require("./database");

function getWorkshopCollection() {
  return getCollection("workshops");
}

function getWorkshops() {
  const collection = getWorkshopCollection();
  return collection.find({}, { projection: { _id: 0 } }).toArray();
}

function addWorkshops(workshop) {
  return getWorkshopCollection().insertOne(workshop);
}

module.exports = {
  getWorkshops,
  addWorkshops
};
