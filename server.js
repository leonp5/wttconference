const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const path = require("path");

const { initDb } = require("./backend/lib/database");
const dbRoutes = require("./backend/routes/dbRoutes");
const loginRoutes = require("./backend/routes/loginRoutes");
const mailRoutes = require("./backend/routes/mailRoutes");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.use("/api", dbRoutes, loginRoutes, mailRoutes);

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")));

// Handle React routing, return all requests to React app
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

initDb(process.env.MONGO_URL, process.env.DB_NAME).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
