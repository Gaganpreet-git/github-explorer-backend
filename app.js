const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const app = express();

// Middleware to parse json request body.
app.use(express.json());

// Middleware to handle Errors.
app.use(errorHandler);

module.exports = app;
