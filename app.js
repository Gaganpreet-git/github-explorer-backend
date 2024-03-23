const express = require("express");
const app = express();

// Middleware to parse json request body.
app.use(express.json());

module.exports = app;
