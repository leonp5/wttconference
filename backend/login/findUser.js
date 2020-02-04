const { getCollection } = require("../lib/database");
const { ObjectID } = require("mongodb");

async function findUser({ name }) {
  const collection = await getCollection("user");
  const result = await collection.findOne({
    name
  });

  return result;
}

async function findUserById(userID) {
  const id = new ObjectID(userID);
  const collection = await getCollection("user");
  const result = await collection.findOne({ _id: id }, { projection: { password: 0 } });

  return result;
}

module.exports = { findUser, findUserById };
