const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const app = express();

const userRoutes = require("./routes/user.routes");

// Middleware to parse json request body.
app.use(express.json());

// Reroute all API request starting with "/api" route to userRoutes.
app.use("/api", userRoutes);

// Middleware to handle Errors.
app.use(errorHandler);

module.exports = app;
