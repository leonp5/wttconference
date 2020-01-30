const { MongoClient } = require("mongodb");

let db = null;

async function initDb(url, dbName) {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  await client.connect();
  db = client.db(dbName);
}

function getCollection(collectionName) {
  if (db === null) {
    throw new Error("Database is not initialized. Call initDB first");
  }
  return db.collection(collectionName);
}

module.exports = {
  initDb,
  getCollection
};
