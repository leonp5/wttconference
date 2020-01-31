const { getCollection } = require("../lib/database");
const { ObjectID } = require("mongodb");

async function findUser({ email }) {
  const collection = await getCollection("user");
  const result = await collection.findOne({
    email
  });

  return result;
}

async function findUserById(userID) {
  const id = new ObjectID(userID);
  const collection = await getCollection("user");
  const result = await collection.findOne({ _id: id });

  console.log(result);
  return result;
}

module.exports = { findUser, findUserById };
