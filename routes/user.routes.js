const express = require("express");
const router = express.Router();

// Route to save a new user.
router.get("/save-user/:username");

// Route to find mutual followers.
router.get("/find-mutual-followers/:username");

// Route to search users.
router.get("/search-users");

// Route to delete a user.
router.delete("/delete-user/:username");

// Route to update a user.
router.patch("/update-user/:username");

// Route to get all users.
router.get("/list-users");

module.exports = router;
