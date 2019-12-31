const dotenv = require("dotenv");
dotenv.config();
const express = require("express");

const { initDb, getCollection } = require("./lib/database");

const url = process.env.MONGO_URL;

const dbName = "wttconference";

const app = express();
const port = 5060;

app.get("/", async (request, response) => {
  const attendees = await getCollection("attendees").findOne();
  response.json(attendees);
});

initDb(url, dbName).then(() => {
  console.log("Database steht");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
