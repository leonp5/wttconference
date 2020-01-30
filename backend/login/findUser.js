const { getCollection } = require("../lib/database");

async function findUser({ email }) {
  const collection = await getCollection("user");
  const result = await collection.findOne({
    email
  });

  return result;
}

module.exports = findUser;
