const { getCollection } = require("./database");

function getUserCollection() {
  return getCollection("user");
}

function getUser() {
  const user = getUserCollection();
  return user.find({}).toArray();
}

function addUser(user) {
  return getUserCollection().insertOne(user);
}

module.exports = { getUser, addUser };
