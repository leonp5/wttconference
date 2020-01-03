const dotenv = require("dotenv");
dotenv.config();
const express = require("express");

const { initDb } = require("./lib/database");
const router = require("./lib/routes");

const app = express();

app.use(express.json({ extended: false }));

app.get("/", (request, response) => {
  response.send();
});

app.post("/", (request, response) => {
  response.send();
});

initDb(process.env.MONGO_URL, process.env.DB_Name).then(() => {
  console.log("Database steht");
});

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
