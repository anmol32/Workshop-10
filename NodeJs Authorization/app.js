const express = require("express");
const jwt = require("jsonwebtoken");
const authorize = require("./middleware");
const config = require("./config");

const app = express();
const port = process.env.PORT || 5000;

// Request a token,
// DISCLAIMER: User should be authenticated!!!
app.get("/token", (req, res) => {
  const payload = {
    name: "Anmol",
    scopes: "customer:read"
  };

  const token = jwt.sign(payload, config.JWT_SECRET);
  res.send(token);
});

app.get("/customer", authorize("customer:read"), (req, res) => {
  res.send("Authorization Successful!");
});

const server = app.listen(port, () => {
  console.log(`Server is listening on ${server.address().port}`);
});