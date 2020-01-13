const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const path = require("path");

const { initDb } = require("./lib/database");
const router = require("./lib/routes");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

// app.get("/", async (request, response) => {
//   response.end();
// });

initDb(process.env.MONGO_URL, process.env.DB_NAME).then(() => {
  console.log("Database steht");
});

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")));

// Handle React routing, return all requests to React app
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
