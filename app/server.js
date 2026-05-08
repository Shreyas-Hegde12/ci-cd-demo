const express = require("express");

const app = express();

app.use(express.json());

const APP_VERSION = "2.0.0";

app.get("/", (req, res) => {
  res.json({
    message: "this is a working web app",
    version: APP_VERSION,
    status: "success"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "UP",
    uptime: process.uptime()
  });
});

app.get("/api/users", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Alice"
    },
    {
      id: 2,
      name: "Bob"
    }
  ]);
});

const PORT = 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;