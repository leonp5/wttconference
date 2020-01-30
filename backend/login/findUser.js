const { getCollection } = require("../lib/database");

async function findUser({ userName }) {
  const collection = await getCollection("user");
  const result = await collection.findOne({
    userName
  });

  return result;
}

module.exports = findUser;
